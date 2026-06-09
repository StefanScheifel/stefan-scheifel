"use client";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
            Unsere Leistungen
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-green-900 mb-4 sm:mb-6">
            Komplettservice für Ihren Garten
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Von der regelmäßigen Pflege bis zur kompletten Neugestaltung - wir
            bieten alle Leistungen rund um Ihren Garten aus einer Hand.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <Card className="group hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200">
            <CardContent className="px-4 sm:px-6">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors">
                <Icon
                  icon="mdi:shovel"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-600"
                />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-900">
                Erdarbeiten
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Aushub, Planierung und Bodenvorbereitung für Neuanlagen und
                Umgestaltungen.
              </p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200">
            <CardContent className="px-4 sm:px-6">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors">
                <Icon
                  icon="mdi:water"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-600"
                />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-900">
                Bewässerung
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Installation und Wartung von Bewässerungsanlagen für eine
                optimale Wasserversorgung.
              </p>
            </CardContent>
          </Card>
          <Card className="group hover:shadow-xl transition-all duration-300 border-green-100 hover:border-green-200">
            <CardContent className="px-4 sm:px-6">
              <div className="bg-green-100 w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-green-200 transition-colors">
                <Icon
                  icon="mdi:snowflake"
                  className="h-6 w-6 sm:h-8 sm:w-8 text-green-600"
                />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-green-900">
                Winterdienst
              </h3>
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                Zuverlässiger Räum- und Streudienst für Ihre Wege und Zufahrten
                in der kalten Jahreszeit.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
