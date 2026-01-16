import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface RoomTypeCardProps {
  name: string;
  description: string;
  priceRange: string;
  features: string[];
  image: string; // url placeholder
}

export function RoomTypeCard({ name, description, priceRange, features, image }: RoomTypeCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:scale-110 transition-transform duration-300">
      <div className="relative h-48 w-full bg-slate-200">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400 bg-brand-50">
          <Image src={image} alt={name} fill className="object-cover hover:scale-110 transition-transform duration-300" />
          <span className="text-sm">Room Image Placeholder</span>
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start gap-4">
          <CardTitle className="text-xl font-bold text-slate-800">{name}</CardTitle>
          <Badge variant="secondary" className="shrink-0 bg-brand-100 text-brand-700">{priceRange}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-600">
              <Check className="mr-2 h-4 w-4 text-brand-500" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-brand-500 hover:bg-brand-400 text-black border-none text-md" asChild>
          <Link href="/booking">Check Availability</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
