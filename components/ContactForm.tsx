"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
        <div>
          <Label htmlFor="first-name">First name</Label>
          <div className="mt-2">
            <Input type="text" name="first-name" id="first-name" autoComplete="given-name" required />
          </div>
        </div>
        <div>
          <Label htmlFor="last-name">Last name</Label>
          <div className="mt-2">
            <Input type="text" name="last-name" id="last-name" autoComplete="family-name" required />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="email">Email</Label>
          <div className="mt-2">
            <Input type="email" name="email" id="email" autoComplete="email" required />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="phone">Phone number</Label>
          <div className="mt-2">
            <Input type="tel" name="phone" id="phone" autoComplete="tel" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <div className="mt-2">
            <Textarea name="message" id="message" rows={4} defaultValue={""} required />
          </div>
        </div>
      </div>
      <div>
        <Button type="submit" className="w-full">
          {submitted ? "Message Sent!" : "Send Message"}
        </Button>
      </div>
    </form>
  )
}
