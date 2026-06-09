"use client";
import React, { useEffect } from "react";
import { Card, CardContent } from "./ui/card";
import { Label } from "@radix-ui/react-label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { Button } from "./ui/button";
import { Icon } from "@iconify/react";
import { Checkbox } from "./ui/checkbox";
import { Badge } from "./ui/badge";

export default function Header() {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
              Seit über 15 Jahren
            </Badge>
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-green-900 mb-4 sm:mb-6">
              Ihr Garten in{" "}
              <span className="text-green-600">besten Händen</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Professionelle Gartenpflege, Landschaftsgestaltung und für Privat-
              und Geschäftskunden in Oldenburg und Umgebung.
            </p>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img
              alt="Gartenpflege Service"
              src="/header.jpeg"
              className="rounded-2xl shadow-2xl w-full h-64 sm:h-80 lg:h-96 object-cover"
            />
            {/* <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-white rounded-xl p-4 sm:p-6 shadow-lg">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="bg-green-100 p-2 sm:p-3 rounded-full">
                    <Icon
                      icon="mdi:star"
                      className="h-4 w-4 sm:h-6 sm:w-6 text-green-600"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-green-900 text-sm sm:text-base">
                      4.9/5 Bewertung
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      200+ zufriedene Kunden
                    </p>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
