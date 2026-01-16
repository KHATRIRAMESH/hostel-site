import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <span className="text-2xl font-bold tracking-tight text-white font-serif">Goma&apos;s Girl Hostel</span>
            <p className="text-sm leading-6 text-slate-300">
              A safe, secure, and homely environment for students and working women in Kathmandu.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" aria-hidden="true" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {['About', 'Services', 'Rooms', 'Gallery', 'Contact'].map((item) => (
                    <li key={item}>
                      <Link href={`/${item.toLowerCase()}`} className="text-sm leading-6 text-slate-300 hover:text-white">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-center gap-2 text-sm leading-6 text-slate-300">
                    <MapPin className="h-4 w-4 shrink-0 text-brand-400" />
                    Kathmandu, Nepal
                  </li>
                  <li className="flex items-center gap-2 text-sm leading-6 text-slate-300">
                    <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                    +977-9800000000
                  </li>
                  <li className="flex items-center gap-2 text-sm leading-6 text-slate-300">
                    <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                    info@gomahostel.com
                  </li>
                </ul>
              </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4291.6967317666995!2d85.33097747607151!3d27.695202326025928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19007c9031b1%3A0xd1a55d5777c1edf8!2sGoma%20girls%20hostel!5e1!3m2!1sen!2snp!4v1768556327711!5m2!1sen!2snp" width="600" height="450" style={{ border: '0', borderRadius: '10px' }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-slate-400">
            &copy; {new Date().getFullYear()} Goma&apos;s Girl Hostel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
