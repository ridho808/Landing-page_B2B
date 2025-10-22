'use client'

import { ArrowRight, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

interface CtaBannerProps {
  title: string
  subtitle: string
  primaryCta: { text: string; href: string }
  secondaryCta?: { text: string; href: string }
  badge?: string
  showRating?: boolean
}

export function CtaBanner({
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  badge = "Limited Time Offer",
  showRating = true
}: CtaBannerProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-600 to-purple-600 rounded-3xl" />
          
          {/* Content */}
          <div className="relative bg-background/95 backdrop-blur-sm border rounded-3xl p-8 lg:p-12 text-center">
            {/* Badge */}
            {badge && (
              <Badge className="mb-6 px-4 py-2 text-sm font-medium">
                {badge}
              </Badge>
            )}

            {/* Rating */}
            {showRating && (
              <div className="flex items-center justify-center space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  4.9/5 from 500+ reviews
                </span>
              </div>
            )}

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-base px-8 h-12 rounded-xl" asChild>
                <a href={primaryCta.href}>
                  {primaryCta.text}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              {secondaryCta && (
                <Button variant="outline" size="lg" className="text-base px-8 h-12 rounded-xl" asChild>
                  <a href={secondaryCta.href}>
                    {secondaryCta.text}
                  </a>
                </Button>
              )}
            </div>

            {/* Trust indicators */}
            <div className="mt-8 text-sm text-muted-foreground">
              ✓ No credit card required ✓ 14-day free trial ✓ Cancel anytime
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}