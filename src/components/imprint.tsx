"use client";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Badge } from "./ui/badge";
import Gallery from "./ui/imagineSlider";

export default function Imprint() {
  const imprintdata = {
    name: "Maxname Mustermann",
    street: "Musterstra&szlig;e 111",
    other: "Geb&auml;ude 44",
    town: "90210 Musterstadt",
    phone: "+49 (0) 123 44 55 66",
    fax: " +49 (0) 123 44 55 99",
    email: "mustermann@musterfirma.de",
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1>Impressum</h1>

            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              {imprintdata.name}
              <br />
              {imprintdata.street}
              <br />
              {imprintdata.other}
              <br />
              {imprintdata.town}
            </p>

            <h2>Kontakt</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Telefon:{imprintdata.phone} <br />
              Telefax:{imprintdata.fax}
              <br />
              E-Mail:{imprintdata.email}
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </section>
  );
}
