import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Gallery() {
  // Generate placeholder images
  const images = Array.from({ length: 9 }).map((_, i) => ({
    id: i,
    src: "/images/room/room1.jpg",
    alt: `Gallery Image ${i + 1}`
  }));

  return (
    <div className="flex min-h-screen flex-col">

      <main className="flex-1 pt-16">
        <div className="bg-brand-900 py-16 sm:py-24 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white font-serif">Photo Gallery</h1>
          <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto px-6">
            Take a glimpse into life at Goma&apos;s Girl Hostel.
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-24">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img) => (
              <div key={img.id} className="relative overflow-hidden rounded-xl bg-slate-200 break-inside-avoid">
                {/* Placeholder blocks of varying heights for masonry effect */}
                <div style={{ height: 200 + (img.id % 3) * 100 }} className="flex items-center justify-center bg-brand-50 text-brand-300">
                  <Image src="/images/room/room1.jpg" alt={img.alt} width={500} height={500} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

    </div>
  );
}
