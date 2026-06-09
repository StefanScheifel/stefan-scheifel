"use client";
import React, { useEffect } from "react";
import { Icon } from "@iconify/react";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
              <Icon
                icon="mdi:leaf"
                className="h-6 w-6 sm:h-8 sm:w-8 text-green-400"
              />
              <h3 className="font-heading text-lg sm:text-xl font-bold">
                GartenService
              </h3>
            </div>
            <p className="text-green-100 mb-4 text-sm sm:text-base">
              Ihr professioneller Partner für Gartenpflege und
              Landschaftsgestaltung in Oldenburg.
            </p>
          </div>
          <a
            href="/privacy"
            className="text-foreground hover:text-green-600 transition-colors"
          >
            Datenschutz
          </a>
          <a
            href="/imprint"
            className="text-foreground hover:text-green-600 transition-colors"
          >
            Impressum
          </a>
        </div>
      </div>
    </footer>
  );
}
