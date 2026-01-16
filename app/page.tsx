import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { TestimonialSlider } from "@/components/TestimonialSlider";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { services, testimonials } from "@/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <Hero />
        
        {/* Statistics Section */}
        <section className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-slate-600">Happy Residents</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-brand-700 sm:text-5xl">50+</dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-slate-600">Success Rating</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-brand-700 sm:text-5xl">4.8/5</dd>
                    </div>
                     <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-base leading-7 text-slate-600">Since</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-brand-700 sm:text-5xl">2018</dd>
                    </div>
                </dl>
            </div>
        </section>

        {/* Services Teaser */}
        <section className="bg-brand-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-serif">Everything You Need</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                We provide all the facilities to make your stay comfortable, safe, and productive.
              </p>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {services.slice(0, 3).map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Button asChild variant="link" className="text-brand-700 font-semibold gap-1">
                 <Link href="/services">View all facilities <ArrowRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials */}
         <section className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-serif">What Our Residents Say</h2>
            </div>
            <TestimonialSlider testimonials={testimonials} />
          </div>
        </section>

        {/* CTA */}
         <section className="bg-brand-900 overflow-hidden py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:items-center text-center lg:text-left">
                     <div className="text-white">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-serif">Ready to book your stay?</h2>
                         <p className="mt-4 text-lg text-slate-300">
                            Secure your spot at Goma&apos;s Girl Hostel today. Limited seats available!
                        </p>
                    </div>
                    <div className="flex justify-center lg:justify-end gap-4">
                        <Button asChild size="lg" className="bg-white text-brand-900 hover:bg-slate-100">
                             <Link href="/booking">Book Now</Link>
                        </Button>
                         <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white">
                             <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>
                </div>
            </div>
         </section>
      </main>
      <Footer />
    </div>
  );
}
