"use client";
import React, { useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { Button } from "./ui/button";
import { Icon } from "@iconify/react";
import { Checkbox } from "./ui/checkbox";

export default function Navigation() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Icon
              icon="mdi:leaf"
              className="h-6 w-6 sm:h-8 sm:w-8 text-green-600"
            />
            <div>
              <h1 className="font-heading text-lg sm:text-2xl font-bold text-green-800">
                AS
              </h1>
              <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                Professionelle Erd & Pflasterarbeiten
              </p>
            </div>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#services"
              className="text-foreground hover:text-green-600 transition-colors"
            >
              Leistungen
            </a>
            <a
              href="/#contact"
              className="text-foreground hover:text-green-600 transition-colors"
            >
              Kontakt
            </a>

            <a
              href="/#gallary"
              className="text-foreground hover:text-green-600 transition-colors"
            >
              Fotogalerie
            </a>
          </nav>
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 sm:size-default"
          >
            <Icon
              icon="mdi:phone"
              className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4"
            />
            <span className="hidden sm:inline">Anrufen</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
