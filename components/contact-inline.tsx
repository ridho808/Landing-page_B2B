'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Mail, Send, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'
import { toast } from 'sonner'

const contactSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500, 'Message must be less than 500 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactInline() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        toast.success('Message sent successfully! We\'ll get back to you soon.')
        reset()
        
        // Reset success state after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      toast.error('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Get Started Today
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready to transform your business? Send us a message and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <Card className="border shadow-lg rounded-2xl">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-brand-600" />
              </div>
              <CardTitle className="text-2xl">Send us a message</CardTitle>
              <CardDescription>
                We'd love to hear about your project and how we can help.
              </CardDescription>
            </CardHeader>
            
            <CardContent className="pt-0">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      {...register('email')}
                      className="text-base h-12 rounded-xl"
                      disabled={isSubmitting}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-2">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      placeholder="Tell us about your project..."
                      rows={4}
                      {...register('message')}
                      className="text-base rounded-xl resize-none"
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-2">{errors.message.message}</p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-base h-12 rounded-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}