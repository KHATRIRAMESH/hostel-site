import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { GoogleMapsEmbed } from "@next/third-parties/google";

export default function Contact() {
    return (
        <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 pt-16">
                <div className="bg-brand-900 py-16 sm:py-24 text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white font-serif">Contact Us</h1>
                    <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto px-6">
                        Have questions? Reach out to us directly or visit our hostel.
                    </p>
                </div>

                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-2xl font-bold text-slate-800 font-serif mb-6">Get in Touch</h2>

                            <div className="space-y-8 mb-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-100 p-3 rounded-lg text-brand-700">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Address</h3>
                                        <p className="text-slate-600">Kathmandu, Nepal</p>
                                        <p className="text-sm text-slate-500 mt-1">(Exact location placeholder)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-100 p-3 rounded-lg text-brand-700">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Phone & WhatsApp</h3>
                                        <p className="text-slate-600">+977-9800000000</p>
                                        <p className="text-slate-600">+977-01-4000000</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="bg-brand-100 p-3 rounded-lg text-brand-700">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-slate-900">Email</h3>
                                        <p className="text-slate-600">info@gomahostel.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-100">
                            <h2 className="text-2xl font-bold text-slate-800 font-serif mb-6">Send a Message</h2>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
