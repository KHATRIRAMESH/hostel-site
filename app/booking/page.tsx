import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

export default function Booking() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
         <div className="bg-brand-900 py-16 sm:py-24 text-center">
             <h1 className="text-4xl font-bold tracking-tight text-white font-serif">Book Your Stay</h1>
             <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto px-6">
                Fill out the form below to inquire about availability and reserve your room.
             </p>
        </div>

        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-12 sm:py-24">
             <div className="bg-white p-8 rounded-2xl shadow-lg border border-brand-100">
                <ContactForm />
             </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
