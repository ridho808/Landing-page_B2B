'use client'

import { LucideIcon } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'

interface KpiItem {
  icon: LucideIcon
  value: string
  label: string
  description?: string
}

interface KpiGridProps {
  items: KpiItem[]
}

export function KpiGrid({ items }: KpiGridProps) {
  return (
    <section className="py-16 lg:py-24">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-card rounded-2xl p-6 border shadow-sm hover:shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-brand-600" />
                </div>
                <div className="flex-1">
                  <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                    {item.value}
                  </div>
                  <div className="text-sm font-medium text-foreground mb-1">
                    {item.label}
                  </div>
                  {item.description && (
                    <div className="text-xs text-muted-foreground">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}