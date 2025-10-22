"use client";

import Image from "next/image";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
  image?: string;
}

export function Hero({
  eyebrow = "B2B Creative Agency",
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  image = "/hero-placeholder.png",
}: HeroProps) {
  const trustBadges = [
    "G2 High Performer",
    "Inc. 5000",
    "Clutch Leader",
    "ISO 27001 Certified",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-background to-muted/20 dark:from-brand-950 dark:via-background dark:to-muted/20" />
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20 dark:opacity-10" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div variants={fadeUp} className="space-y-8">
            {/* Eyebrow */}
            <Badge variant="secondary" className="px-4 py-2">
              {eyebrow}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {title.split(" ").map((word, index) => (
                <span
                  key={index}
                  className={
                    word.includes("Creative") || word.includes("Innovation")
                      ? "text-brand-600"
                      : ""
                  }
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base px-8" asChild>
                <a href={primaryCta.href}>
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-base px-8"
                asChild
              >
                <a href={secondaryCta.href}>
                  <Play className="mr-2 h-4 w-4" />
                  {secondaryCta.text}
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Trusted by 500+ enterprise companies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {trustBadges.map((badge) => (
                  <Badge key={badge} variant="outline" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div variants={fadeUp} className="relative">
            <div className="relative aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt="Creative Agency Dashboard"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 bg-background/80 backdrop-blur-lg rounded-xl shadow-lg p-4 border"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm font-medium text-foreground">
                  Live Dashboard
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [10, -10, 10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 bg-background/80 backdrop-blur-lg rounded-xl shadow-lg p-4 border"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-brand-600">+247%</div>
                <div className="text-xs text-muted-foreground">ROI Average</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
