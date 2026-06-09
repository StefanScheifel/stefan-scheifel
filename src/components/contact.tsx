"use client";
import React, { useEffect } from "react";
import { Card, CardContent } from "./ui/card";

import { Icon } from "@iconify/react";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <motion.section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            Kontakt
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-green-900 mb-4 sm:mb-6">
            Lassen Sie uns über Ihren Garten sprechen
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Kontaktieren Sie uns für eine kostenlose Beratung und ein
            unverbindliches Angebot.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="text-center border-green-100">
            <CardContent className="px-4 sm:px-6">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Icon
                  icon="mdi:phone"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-600"
                />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-900">
                Telefon
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Rufen Sie uns an für eine schnelle Beratung
              </p>
              <p className="text-base sm:text-lg font-semibold text-green-600">
                015754647995
              </p>
            </CardContent>
          </Card>
          <Card className="text-center border-green-100">
            <CardContent className="px-4 sm:px-6">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Icon
                  icon="mdi:email"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-600"
                />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-900">
                E-Mail
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Schreiben Sie uns Ihr Anliegen
              </p>
              <p className="text-base sm:text-lg font-semibold text-green-600">
                as-gartenbau@web.de
              </p>
            </CardContent>
          </Card>
          <Card className="text-center border-green-100">
            <CardContent className="px-4 sm:px-6">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Icon
                  icon="mdi:map-marker"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-600"
                />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-900">
                Adresse
              </h3>
              <p className="text-muted-foreground mb-3 sm:mb-4 text-sm sm:text-base">
                Besuchen Sie uns in unserem Büro
              </p>
              <p className="text-base sm:text-lg font-semibold text-green-600">
                Gartenstraße 23
                <br />
                26122 Oldenburg
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.section>
  );
}
