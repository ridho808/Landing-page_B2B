'use client'

import Image from 'next/image'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/motion'

interface ZigzagItem {
  title: string
  copy: string
  bullets: string[]
  image: string
  imageSide: 'left' | 'right'
}

interface ZigzagSectionProps {
  items: ZigzagItem[]
}

export function ZigzagSection({ items }: ZigzagSectionProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24 last:mb-0 ${
              item.imageSide === 'right' ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            {/* Content */}
            <motion.div 
              variants={fadeUp}
              className={`space-y-6 ${
                item.imageSide === 'right' ? 'lg:col-start-1' : 'lg:col-start-2'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                {item.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {item.copy}
              </p>
              
              {/* Bullets */}
              <div className="space-y-3">
                {item.bullets.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{bullet}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Image */}
            <motion.div 
              variants={fadeUp}
              className={`relative ${
                item.imageSide === 'right' ? 'lg:col-start-2' : 'lg:col-start-1'
              }`}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
              
              {/* Decorative element */}
              <div className={`absolute -bottom-6 ${
                item.imageSide === 'right' ? '-left-6' : '-right-6'
              } w-24 h-24 bg-brand-100 rounded-2xl -z-10`} />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}