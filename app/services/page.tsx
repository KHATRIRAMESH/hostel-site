import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data";

export default function Services() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
        <div className="bg-brand-900 py-16 sm:py-24 text-center">
             <h1 className="text-4xl font-bold tracking-tight text-white font-serif">Our Facilities</h1>
             <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto px-6">
                We ensure you have everything you need for a hassle-free stay.
             </p>
        </div>
        
        <div className="bg-brand-50 py-12 sm:py-24">
             <div className="mx-auto max-w-7xl px-6 lg:px-8">
                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                     {services.map((service) => (
                         <ServiceCard key={service.title} {...service} className="bg-white" />
                     ))}
                 </div>
                 
                 <div className="mt-16 bg-white p-8 rounded-2xl shadow-sm border border-brand-100">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif">Additional Perks</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-slate-700">
                        <li className="flex items-center gap-2">✅ Close to major colleges and tuition centers</li>
                        <li className="flex items-center gap-2">✅ Easy access to public transportation</li>
                        <li className="flex items-center gap-2">✅ Nearby hospitals and medical shops</li>
                        <li className="flex items-center gap-2">✅ Regular housekeeping and cleaning</li>
                        <li className="flex items-center gap-2">✅ Spacious terrace for relaxation</li>
                        <li className="flex items-center gap-2">✅ Visitor area for parents/guardians</li>
                    </ul>
                 </div>
             </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
