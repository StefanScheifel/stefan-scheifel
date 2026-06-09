"use client";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";
import { Badge } from "./ui/badge";
import Gallery from "./ui/imagineSlider";

export default function Privacy() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Über uns
            </Badge>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-green-900 mb-4 sm:mb-6">
              Erfahrung und Leidenschaft für Ihren Garten
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              Seit über 15 Jahren sind wir Ihr zuverlässiger Partner für
              professionelle Gartenpflege in Oldenburg und Umgebung. Unser
              erfahrenes Team aus gelernten Garten- und Landschaftsbauern sorgt
              dafür, dass Ihr Garten das ganze Jahr über in bestem Zustand ist.
            </p>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 w-2 h-2 rounded-full flex-shrink-0" />
                <p className="text-muted-foreground text-sm sm:text-base">
                  Zertifizierte Fachkräfte mit langjähriger Erfahrung
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 w-2 h-2 rounded-full flex-shrink-0" />
                <p className="text-muted-foreground text-sm sm:text-base">
                  Moderne Geräte und umweltschonende Methoden
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-600 w-2 h-2 rounded-full flex-shrink-0" />
                <p className="text-muted-foreground text-sm sm:text-base">
                  Individuelle Beratung und maßgeschneiderte Lösungen
                </p>
              </div>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <Gallery />
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-white rounded-xl p-3 sm:p-4 shadow-lg">
              <div className="text-center">
                <p className="text-xl sm:text-2xl font-bold text-green-600">
                  15+
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Jahre Erfahrung
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
