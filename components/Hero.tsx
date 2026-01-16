import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-brand-900 py-24 sm:py-32 lg:pb-40">
       {/* Background Image / Overlay */}
       <div className="absolute inset-0 -z-10 h-full w-full bg-slate-900/70">
          {/* Use a real image here in production */}
          <div className="h-full w-full bg-gradient-to-br from-brand-900 to-slate-900 opacity-80" />
       </div>

       <div className="mx-auto max-w-7xl px-6 lg:px-8">
         <div className="mx-auto max-w-2xl text-center">
           <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
             Welcome to Goma&apos;s Girl Hostel
           </h1>
           <p className="mt-6 text-lg leading-8 text-slate-100">
             Safe • Comfortable • Home-like stay for girls in Kathmandu. <br/>
             Experience the warmth of home with the security you deserve.
           </p>
           <div className="mt-10 flex items-center justify-center gap-x-6">
             <Button asChild size="lg" className="bg-brand-500 hover:bg-brand-400 text-white border-none text-md">
               <Link href="/booking">Check Availability</Link>
             </Button>
             <Button asChild variant="outline" size="lg" className="text-white border-white hover:bg-white/10 hover:text-white">
               <Link href="/contact">Contact Us</Link>
             </Button>
           </div>
         </div>
       </div>
    </div>
  )
}
