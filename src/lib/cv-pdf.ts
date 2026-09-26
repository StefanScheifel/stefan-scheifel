import {
  PDFDocument,
  type PDFFont,
  type PDFPage,
  type RGB,
  rgb,
  StandardFonts,
} from "pdf-lib";
import type {
  EducationItem,
  ExperienceItem,
  PortfolioDictionary,
  PortfolioProject,
  SkillItem,
} from "@/i18n/types";

const PAGE_WIDTH = 595.28;
const PAGE_HEIGHT = 841.89;
const MARGIN_X = 46;
const MARGIN_BOTTOM = 42;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_X * 2;
const CONTINUATION_TOP = PAGE_HEIGHT - 52;

const colors = {
  header: rgb(0.09, 0.11, 0.16),
  accent: rgb(0.16, 0.58, 0.74),
  white: rgb(1, 1, 1),
  headerMuted: rgb(0.76, 0.81, 0.86),
  ink: rgb(0.12, 0.14, 0.18),
  muted: rgb(0.34, 0.38, 0.43),
  rule: rgb(0.8, 0.83, 0.86),
  track: rgb(0.88, 0.9, 0.92),
};

type Ctx = {
  pdf: PDFDocument;
  page: PDFPage;
  y: number;
  pages: PDFPage[];
  regular: PDFFont;
  bold: PDFFont;
  italic: PDFFont;
  contentTop: number;
};

function normalizePunctuation(value: string): string {
  return value
    .replace(/[\u2012\u2013\u2014\u2015]/g, "-")
    .replace(/[\u2018\u2019\u2032]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\u2026/g, "...")
    .replace(/\u00A0/g, " ")
    .replace(/\u2022/g, "-");
}

function sanitize(font: PDFFont, value: string): string {
  const normalized = normalizePunctuation(value);
  let result = "";
  for (const char of normalized) {
    try {
      font.encodeText(char);
      result += char;
    } catch {
      result += " ";
    }
  }
  return result.replace(/[ ]{2,}/g, " ").trim();
}

function wrapText(
  font: PDFFont,
  text: string,
  size: number,
  maxWidth: number,
): string[] {
  const safe = sanitize(font, text);
  const words = safe.split(/\s+/).filter((word) => word.length > 0);
  if (words.length === 0) return [];

  const lines: string[] = [];
  let current = "";

  const appendLongWord = (word: string) => {
    let chunk = "";
    for (const char of word) {
      const next = chunk + char;
      if (font.widthOfTextAtSize(next, size) <= maxWidth) {
        chunk = next;
      } else {
        if (chunk) lines.push(chunk);
        chunk = char;
      }
    }
    current = chunk;
  };

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (font.widthOfTextAtSize(next, size) <= maxWidth) {
      current = next;
      continue;
    }
    if (current) lines.push(current);
    current = "";
    if (font.widthOfTextAtSize(word, size) <= maxWidth) {
      current = word;
    } else {
      appendLongWord(word);
    }
  }

  if (current) lines.push(current);
  return lines;
}

function addPage(ctx: Ctx, dict: PortfolioDictionary) {
  const page = ctx.pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  ctx.page = page;
  ctx.pages.push(page);

  const name = sanitize(ctx.bold, dict.profile.name);
  const label = sanitize(ctx.regular, dict.cv.documentLabel);
  page.drawText(name, {
    x: MARGIN_X,
    y: PAGE_HEIGHT - 28,
    size: 9,
    font: ctx.bold,
    color: colors.ink,
  });
  const labelWidth = ctx.regular.widthOfTextAtSize(label, 9);
  page.drawText(label, {
    x: PAGE_WIDTH - MARGIN_X - labelWidth,
    y: PAGE_HEIGHT - 28,
    size: 9,
    font: ctx.regular,
    color: colors.muted,
  });
  page.drawLine({
    start: { x: MARGIN_X, y: PAGE_HEIGHT - 36 },
    end: { x: PAGE_WIDTH - MARGIN_X, y: PAGE_HEIGHT - 36 },
    thickness: 0.6,
    color: colors.rule,
  });
  ctx.y = CONTINUATION_TOP;
  ctx.contentTop = CONTINUATION_TOP;
}

function ensure(ctx: Ctx, dict: PortfolioDictionary, height: number) {
  if (ctx.y - height >= MARGIN_BOTTOM) return;
  if (ctx.y >= ctx.contentTop - 1) return;
  addPage(ctx, dict);
}

function drawSectionTitle(ctx: Ctx, dict: PortfolioDictionary, title: string) {
  ensure(ctx, dict, 40);
  ctx.y -= 14;
  const text = sanitize(ctx.bold, title).toUpperCase();
  ctx.page.drawText(text, {
    x: MARGIN_X,
    y: ctx.y,
    size: 11,
    font: ctx.bold,
    color: colors.accent,
  });
  ctx.y -= 6;
  ctx.page.drawLine({
    start: { x: MARGIN_X, y: ctx.y },
    end: { x: PAGE_WIDTH - MARGIN_X, y: ctx.y },
    thickness: 0.8,
    color: colors.rule,
  });
  ctx.y -= 14;
}

function drawParagraph(
  ctx: Ctx,
  dict: PortfolioDictionary,
  text: string,
  options: {
    x?: number;
    size?: number;
    font?: PDFFont;
    color?: RGB;
    maxWidth?: number;
    lineGap?: number;
  } = {},
) {
  const size = options.size ?? 10;
  const font = options.font ?? ctx.regular;
  const color = options.color ?? colors.ink;
  const x = options.x ?? MARGIN_X;
  const maxWidth = options.maxWidth ?? CONTENT_WIDTH - (x - MARGIN_X);
  const lineGap = options.lineGap ?? size + 4;
  const lines = wrapText(font, text, size, maxWidth);

  for (const line of lines) {
    ensure(ctx, dict, lineGap);
    ctx.page.drawText(line, { x, y: ctx.y, size, font, color });
    ctx.y -= lineGap;
  }
}

function drawBullet(
  ctx: Ctx,
  dict: PortfolioDictionary,
  text: string,
  x: number,
  width: number,
) {
  const size = 9.5;
  const lineGap = 13;
  const indent = 12;
  const lines = wrapText(ctx.regular, text, size, width - indent);
  for (const [index, line] of lines.entries()) {
    ensure(ctx, dict, lineGap);
    if (index === 0) {
      ctx.page.drawCircle({
        x: x + 2.2,
        y: ctx.y + 2.5,
        size: 1.45,
        color: colors.accent,
      });
    }
    ctx.page.drawText(line, {
      x: x + indent,
      y: ctx.y,
      size,
      font: ctx.regular,
      color: colors.ink,
    });
    ctx.y -= lineGap;
  }
}

function drawFirstPageHeader(ctx: Ctx, dict: PortfolioDictionary) {
  const contact = [
    dict.profile.location,
    dict.profile.email,
    dict.profile.phone,
  ].join(" · ");
  const contactLines = wrapText(ctx.regular, contact, 9, CONTENT_WIDTH);
  const headerHeight = 86 + contactLines.length * 13;

  ctx.page.drawRectangle({
    x: 0,
    y: PAGE_HEIGHT - headerHeight,
    width: PAGE_WIDTH,
    height: headerHeight,
    color: colors.header,
  });
  ctx.page.drawRectangle({
    x: 0,
    y: PAGE_HEIGHT - headerHeight,
    width: 6,
    height: headerHeight,
    color: colors.accent,
  });

  const label = sanitize(ctx.bold, dict.cv.documentLabel).toUpperCase();
  const labelWidth = ctx.bold.widthOfTextAtSize(label, 9);
  ctx.page.drawText(label, {
    x: PAGE_WIDTH - MARGIN_X - labelWidth,
    y: PAGE_HEIGHT - 40,
    size: 9,
    font: ctx.bold,
    color: colors.accent,
  });

  const nameMax = CONTENT_WIDTH - labelWidth - 16;
  const name = wrapText(ctx.bold, dict.profile.name, 22, nameMax)[0] ?? "";
  ctx.page.drawText(name, {
    x: MARGIN_X,
    y: PAGE_HEIGHT - 42,
    size: 22,
    font: ctx.bold,
    color: colors.white,
  });
  ctx.page.drawText(sanitize(ctx.regular, dict.profile.title), {
    x: MARGIN_X,
    y: PAGE_HEIGHT - 64,
    size: 12,
    font: ctx.regular,
    color: colors.accent,
  });

  let contactY = PAGE_HEIGHT - 86;
  for (const line of contactLines) {
    ctx.page.drawText(line, {
      x: MARGIN_X,
      y: contactY,
      size: 9,
      font: ctx.regular,
      color: colors.headerMuted,
    });
    contactY -= 13;
  }

  ctx.y = PAGE_HEIGHT - headerHeight - 22;
  ctx.contentTop = ctx.y;
}

function drawExperience(
  ctx: Ctx,
  dict: PortfolioDictionary,
  item: ExperienceItem,
) {
  const leftWidth = 108;
  const rightX = MARGIN_X + leftWidth + 10;
  const rightWidth = CONTENT_WIDTH - leftWidth - 10;
  const roleLines = wrapText(ctx.bold, item.role, 11, rightWidth);
  const meta = [item.company, item.location].filter(Boolean).join(" · ");
  const metaLines = wrapText(ctx.regular, meta, 9.5, rightWidth);
  const contextLines = item.context
    ? wrapText(ctx.italic, item.context, 9, rightWidth)
    : [];
  const blockHeight =
    roleLines.length * 14 +
    metaLines.length * 12 +
    contextLines.length * 12 +
    4;
  ensure(ctx, dict, blockHeight);

  const periodLines = wrapText(ctx.bold, item.period, 8.5, leftWidth);
  const blockStart = ctx.y;
  let periodY = blockStart;
  for (const line of periodLines) {
    ctx.page.drawText(line, {
      x: MARGIN_X,
      y: periodY,
      size: 8.5,
      font: ctx.bold,
      color: colors.muted,
    });
    periodY -= 11;
  }

  for (const line of roleLines) {
    ctx.page.drawText(line, {
      x: rightX,
      y: ctx.y,
      size: 11,
      font: ctx.bold,
      color: colors.ink,
    });
    ctx.y -= 14;
  }
  for (const line of metaLines) {
    ctx.page.drawText(line, {
      x: rightX,
      y: ctx.y,
      size: 9.5,
      font: ctx.regular,
      color: colors.ink,
    });
    ctx.y -= 12;
  }
  for (const line of contextLines) {
    ctx.page.drawText(line, {
      x: rightX,
      y: ctx.y,
      size: 9,
      font: ctx.italic,
      color: colors.muted,
    });
    ctx.y -= 12;
  }

  if (ctx.y > periodY) ctx.y = periodY;
  ctx.y -= 2;
  for (const task of item.tasks) {
    drawBullet(ctx, dict, task, rightX, rightWidth);
  }
  ctx.y -= 8;
}

function drawEducation(
  ctx: Ctx,
  dict: PortfolioDictionary,
  item: EducationItem,
) {
  const leftWidth = 108;
  const rightX = MARGIN_X + leftWidth + 10;
  const rightWidth = CONTENT_WIDTH - leftWidth - 10;
  const primary = item.title ?? item.degree ?? item.institution;
  const secondary = item.institution !== primary ? item.institution : undefined;
  const tertiary =
    item.degree && item.degree !== primary ? item.degree : undefined;
  const primaryLines = wrapText(ctx.bold, primary, 11, rightWidth);
  const secondaryLines = secondary
    ? wrapText(ctx.regular, secondary, 9.5, rightWidth)
    : [];
  const tertiaryLines = tertiary
    ? wrapText(ctx.italic, tertiary, 9, rightWidth)
    : [];
  ensure(
    ctx,
    dict,
    primaryLines.length * 14 +
      secondaryLines.length * 12 +
      tertiaryLines.length * 12 +
      8,
  );

  const periodLines = wrapText(ctx.bold, item.period, 8.5, leftWidth);
  const blockStart = ctx.y;
  let periodY = blockStart;
  for (const line of periodLines) {
    ctx.page.drawText(line, {
      x: MARGIN_X,
      y: periodY,
      size: 8.5,
      font: ctx.bold,
      color: colors.muted,
    });
    periodY -= 11;
  }

  for (const line of primaryLines) {
    ctx.page.drawText(line, {
      x: rightX,
      y: ctx.y,
      size: 11,
      font: ctx.bold,
      color: colors.ink,
    });
    ctx.y -= 14;
  }
  for (const line of secondaryLines) {
    ctx.page.drawText(line, {
      x: rightX,
      y: ctx.y,
      size: 9.5,
      font: ctx.regular,
      color: colors.ink,
    });
    ctx.y -= 12;
  }
  for (const line of tertiaryLines) {
    ctx.page.drawText(line, {
      x: rightX,
      y: ctx.y,
      size: 9,
      font: ctx.italic,
      color: colors.muted,
    });
    ctx.y -= 12;
  }
  if (ctx.y > periodY) ctx.y = periodY;
  ctx.y -= 6;
}

function drawProject(
  ctx: Ctx,
  dict: PortfolioDictionary,
  project: PortfolioProject,
) {
  const titleLines = wrapText(ctx.bold, project.title, 11, CONTENT_WIDTH);
  ensure(ctx, dict, titleLines.length * 14 + 28);
  for (const line of titleLines) {
    ctx.page.drawText(line, {
      x: MARGIN_X,
      y: ctx.y,
      size: 11,
      font: ctx.bold,
      color: colors.ink,
    });
    ctx.y -= 14;
  }
  if (project.tags.length > 0) {
    drawParagraph(ctx, dict, project.tags.join(" · "), {
      size: 8.5,
      color: colors.accent,
      lineGap: 12,
    });
  }
  drawParagraph(ctx, dict, project.description, {
    size: 9.5,
    color: colors.ink,
    lineGap: 12.5,
  });
  ctx.y -= 6;
}

function drawSkill(ctx: Ctx, skill: SkillItem, x: number, width: number) {
  const barWidth = 58;
  const label = `${skill.level}/5`;
  const labelWidth = ctx.bold.widthOfTextAtSize(label, 8);
  const nameMax = width - barWidth - labelWidth - 14;
  const name = wrapText(ctx.regular, skill.name, 9, nameMax)[0] ?? "";
  ctx.page.drawText(name, {
    x,
    y: ctx.y,
    size: 9,
    font: ctx.regular,
    color: colors.ink,
  });

  const barX = x + width - barWidth - labelWidth - 8;
  const ratio = Math.min(1, Math.max(0, skill.level / 5));
  ctx.page.drawRectangle({
    x: barX,
    y: ctx.y + 1,
    width: barWidth,
    height: 4,
    color: colors.track,
  });
  ctx.page.drawRectangle({
    x: barX,
    y: ctx.y + 1,
    width: barWidth * ratio,
    height: 4,
    color: colors.accent,
  });
  ctx.page.drawText(label, {
    x: x + width - labelWidth,
    y: ctx.y,
    size: 8,
    font: ctx.bold,
    color: colors.muted,
  });
}

function drawSkillGrid(
  ctx: Ctx,
  dict: PortfolioDictionary,
  skills: SkillItem[],
) {
  const gap = 18;
  const columnWidth = (CONTENT_WIDTH - gap) / 2;
  for (let index = 0; index < skills.length; index += 2) {
    ensure(ctx, dict, 16);
    const left = skills[index];
    const right = skills[index + 1];
    if (left) drawSkill(ctx, left, MARGIN_X, columnWidth);
    if (right) drawSkill(ctx, right, MARGIN_X + columnWidth + gap, columnWidth);
    ctx.y -= 16;
  }
}

function drawSubheading(ctx: Ctx, dict: PortfolioDictionary, title: string) {
  ensure(ctx, dict, 26);
  ctx.y -= 6;
  ctx.page.drawText(sanitize(ctx.bold, title), {
    x: MARGIN_X,
    y: ctx.y,
    size: 10,
    font: ctx.bold,
    color: colors.ink,
  });
  ctx.y -= 14;
}

function drawPageFooters(ctx: Ctx, dict: PortfolioDictionary) {
  const total = ctx.pages.length;
  const footer = sanitize(
    ctx.regular,
    `${dict.profile.name} · ${dict.profile.email}`,
  );
  ctx.pages.forEach((page, index) => {
    const label = `${index + 1} / ${total}`;
    const labelWidth = ctx.regular.widthOfTextAtSize(label, 8);
    page.drawText(footer, {
      x: MARGIN_X,
      y: 22,
      size: 8,
      font: ctx.regular,
      color: colors.muted,
    });
    page.drawText(label, {
      x: PAGE_WIDTH - MARGIN_X - labelWidth,
      y: 22,
      size: 8,
      font: ctx.regular,
      color: colors.muted,
    });
  });
}

export async function buildCvPdf(
  dict: PortfolioDictionary,
): Promise<Uint8Array> {
  const pdf = await PDFDocument.create();
  pdf.setTitle(`${dict.profile.name} - ${dict.cv.documentLabel}`);
  pdf.setAuthor(dict.profile.name);
  pdf.setSubject(dict.about.intro);
  pdf.setCreator("Stefan Scheifel portfolio");

  const ctx: Ctx = {
    pdf,
    page: undefined as unknown as PDFPage,
    y: 0,
    pages: [],
    regular: await pdf.embedFont(StandardFonts.Helvetica),
    bold: await pdf.embedFont(StandardFonts.HelveticaBold),
    italic: await pdf.embedFont(StandardFonts.HelveticaOblique),
    contentTop: 0,
  };

  const firstPage = pdf.addPage([PAGE_WIDTH, PAGE_HEIGHT]);
  ctx.page = firstPage;
  ctx.pages.push(firstPage);
  drawFirstPageHeader(ctx, dict);

  drawSectionTitle(ctx, dict, dict.about.title);
  drawParagraph(ctx, dict, dict.about.intro, { size: 10, lineGap: 14 });
  if (dict.hero.intro.trim() !== dict.about.intro.trim()) {
    ctx.y -= 2;
    drawParagraph(ctx, dict, dict.hero.intro, {
      size: 10,
      color: colors.muted,
      lineGap: 14,
    });
  }
  if (dict.highlights.length > 0) {
    drawSubheading(ctx, dict, dict.cv.highlights);
    for (const highlight of dict.highlights) {
      drawBullet(ctx, dict, highlight, MARGIN_X, CONTENT_WIDTH);
    }
  }

  drawSectionTitle(ctx, dict, dict.experienceSection.eyebrow);
  for (const item of dict.experience) {
    drawExperience(ctx, dict, item);
  }

  if (dict.projects.length > 0) {
    drawSectionTitle(ctx, dict, dict.projectsSection.eyebrow);
    if (dict.projectsSection.intro) {
      drawParagraph(ctx, dict, dict.projectsSection.intro, {
        size: 9.5,
        color: colors.muted,
        lineGap: 13,
      });
      ctx.y -= 4;
    }
    for (const project of dict.projects) {
      drawProject(ctx, dict, project);
    }
  }

  drawSectionTitle(ctx, dict, dict.educationSection.eyebrow);
  for (const item of dict.education) {
    drawEducation(ctx, dict, item);
  }

  drawSectionTitle(ctx, dict, dict.skillsSection.title);
  drawSubheading(ctx, dict, dict.skillsSection.coreSkills);
  drawSkillGrid(ctx, dict, dict.skills);

  drawSubheading(ctx, dict, dict.skillsSection.languages);
  for (const language of dict.languages) {
    ensure(ctx, dict, 16);
    drawSkill(
      ctx,
      {
        name: `${language.name} - ${language.level}`,
        level: language.proficiency,
      },
      MARGIN_X,
      CONTENT_WIDTH,
    );
    ctx.y -= 16;
  }

  if (dict.training.length > 0) {
    drawSubheading(ctx, dict, dict.skillsSection.training);
    const gap = 18;
    const columnWidth = (CONTENT_WIDTH - gap) / 2;
    for (let index = 0; index < dict.training.length; index += 2) {
      ensure(ctx, dict, 14);
      const row = [dict.training[index], dict.training[index + 1]];
      row.forEach((item, column) => {
        if (!item) return;
        const text = `${item.year}  ${item.title}`;
        const line = wrapText(ctx.regular, text, 9, columnWidth)[0] ?? "";
        ctx.page.drawText(line, {
          x: MARGIN_X + column * (columnWidth + gap),
          y: ctx.y,
          size: 9,
          font: ctx.regular,
          color: colors.ink,
        });
      });
      ctx.y -= 14;
    }
  }

  if (dict.techStack.length > 0) {
    drawSubheading(ctx, dict, dict.skillsSection.techStack);
    drawParagraph(ctx, dict, dict.techStack.join(", "), {
      size: 9.5,
      lineGap: 13,
    });
  }

  if (dict.tools.length > 0) {
    drawSubheading(ctx, dict, dict.skillsSection.tools);
    drawParagraph(ctx, dict, dict.tools.join(", "), {
      size: 9.5,
      lineGap: 13,
    });
  }

  drawPageFooters(ctx, dict);
  return pdf.save();
}
