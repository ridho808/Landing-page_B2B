'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

interface LogosProps {
  title?: string
  subtitle?: string
  logos: Array<{
    name: string
    src: string
    width?: number
    height?: number
  }>
}

export function Logos({ 
  title = "Trusted by industry leaders",
  subtitle = "Join 500+ companies already transforming their business",
  logos 
}: LogosProps) {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </motion.div>

        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 lg:gap-12 items-center"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              <div className="relative w-full h-16 lg:h-20 filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16vw"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}