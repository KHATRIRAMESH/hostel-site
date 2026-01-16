import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="bg-brand-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl font-serif">About Goma&apos;s Girl Hostel</h2>
              <p className="mt-6 text-lg leading-8 text-slate-600">
                Established in 2018, we provide a safe, homely, and disciplined environment for female students and working professionals in Kathmandu.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-brand-50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
              <div>
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl font-serif mb-6">Our Mission</h3>
                <p className="text-base leading-7 text-slate-700">
                  Our mission is to create a second home for girls away from home. We understand the concerns of parents and the needs of residents. That&apos;s why we prioritize security, hygiene, and a conducive environment for personal growth and study.
                </p>
                <p className="mt-4 text-base leading-7 text-slate-700">
                  We believe that a hostel is more than just a place to sleep—it&apos;s a community. We strive to foster a friendly discipline where everyone respects each other&apos;s space while building lifelong friendships.
                </p>
              </div>
              <div className="bg-brand-100 p-8 rounded-2xl">
                <h3 className="text-xl font-bold tracking-tight text-brand-900 mb-4">Why Choose Us?</h3>
                <ul className="list-disc list-inside space-y-2 text-slate-700">
                  <li>Run by a dedicated female warden.</li>
                  <li>Located in a prime, safe residential area.</li>
                  <li>Focus on nutritional, hygienic home-cooked meals.</li>
                  <li>Strict security protocols with 24/7 CCTV.</li>
                  <li>Affordable pricing with no hidden costs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
