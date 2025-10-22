'use client'

import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

interface WhySectionProps {
  title: string
  description: string
  pills: string[]
}

export function WhySection({ title, description, pills }: WhySectionProps) {
  return (
    <section id="why" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            {title}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground mb-12 leading-relaxed">
            {description}
          </p>
          
          {/* Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {pills.map((pill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium"
              >
                {pill}
              </Badge>
            ))}
          </div>

          {/* Sparkline SVG */}
          <div className="relative">
            <svg
              viewBox="0 0 800 200"
              className="w-full h-auto max-w-3xl mx-auto"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="sparkline-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              
              {/* Grid lines */}
              {[...Array(5)].map((_, i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 50}
                  x2="800"
                  y2={i * 50}
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="2,4"
                  className="text-muted-foreground/30"
                />
              ))}
              
              {/* Sparkline path */}
              <motion.path
                d="M 0,150 Q 100,120 200,100 T 400,80 Q 500,60 600,40 T 800,20"
                fill="none"
                stroke="url(#sparkline-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              
              {/* Data points */}
              {[0, 200, 400, 600, 800].map((x, i) => (
                <motion.circle
                  key={i}
                  cx={x}
                  cy={150 - i * 30}
                  r="4"
                  fill="#6366f1"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                />
              ))}
            </svg>
            
            {/* Labels */}
            <div className="flex justify-between mt-4 text-xs text-muted-foreground">
              <span>2020</span>
              <span>2021</span>
              <span>2022</span>
              <span>2023</span>
              <span>2024</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}