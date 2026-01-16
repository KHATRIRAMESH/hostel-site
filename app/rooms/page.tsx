import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RoomTypeCard } from "@/components/RoomTypeCard";
import { roomTypes } from "@/data";

export default function Rooms() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pt-16">
         <div className="bg-brand-900 py-16 sm:py-24 text-center">
             <h1 className="text-4xl font-bold tracking-tight text-white font-serif">Accommodation</h1>
             <p className="mt-4 text-lg text-brand-100 max-w-2xl mx-auto px-6">
                Choose the room that best fits your needs and budget.
             </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12 sm:py-24">
             <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                 {roomTypes.map((room) => (
                     <RoomTypeCard key={room.id} {...room} />
                 ))}
             </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
