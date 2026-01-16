"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  content: string
  rating: number
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial) => (
         <Card key={testimonial.id} className="bg-brand-50/50 border-brand-100">
          <CardContent className="pt-6">
            <Quote className="h-8 w-8 text-brand-300 mb-4" />
            <p className="text-slate-700 italic mb-4">&quot;{testimonial.content}&quot;</p>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-brand-200 flex items-center justify-center text-brand-700 font-bold">
                {testimonial.name[0]}
              </div>
              <div>
                <p className="font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.role}</p>
              </div>
            </div>
            <div className="mt-4 flex text-yellow-500">
               {[...Array(5)].map((_, i) => (
                 <svg key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : 'text-gray-300'}`} viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                 </svg>
               ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
