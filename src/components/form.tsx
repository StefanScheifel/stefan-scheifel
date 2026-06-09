import React from "react";
import { Card, CardContent } from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { headers } from "next/headers";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";
import { Checkbox } from "./ui/checkbox";

export default function Web3Form() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-white">
      <Card className="mt-12 sm:mt-16 max-w-2xl mx-auto border-green-100">
        <CardContent className="px-6">
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="96883897-df54-4513-9754-d28f884a570e"
            />
            <input type="hidden" name="redirect" value={""}></input>
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: "none" }}
            />
            <div className="text-center mb-6">
              <h3 className="font-heading text-2xl font-bold text-green-900 mb-2">
                Kontaktformular
              </h3>
              <p className="text-muted-foreground">
                Senden Sie uns eine Nachricht und wir melden uns
                schnellstmöglich bei Ihnen zurück.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-green-900 font-medium">
                    Name *
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    required
                    className="border-green-200 focus:border-green-600"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-green-900 font-medium">
                    E-Mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    className="border-green-200 focus:border-green-600"
                    placeholder="ihre@email.de"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-green-900 font-medium">
                  Telefonnummer
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  name="phone"
                  pattern="\+49[1-9][0-9]{1,14}$"
                  className="border-green-200 focus:border-green-600"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-green-900 font-medium">
                  Nachricht *
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="border-green-200 focus:border-green-600"
                  placeholder="Beschreiben Sie Ihr Anliegen oder Ihren Garten..."
                />
              </div>
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  name="privacy"
                  required
                  className="border-green-600 data-[state=checked]:bg-green-600"
                />
                <Label
                  htmlFor="privacy"
                  className="text-sm text-muted-foreground leading-relaxed"
                >
                  Ich stimme der Verarbeitung meiner Daten gemäß der
                  Datenschutzerklärung zu. *
                </Label>
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700 mt-6">
                <Icon icon="mdi:send" className="mr-2 h-4 w-4" />
                Nachricht senden
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
