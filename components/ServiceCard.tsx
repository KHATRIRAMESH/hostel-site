import { LucideIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, className }: ServiceCardProps) {
  return (
    <Card className={cn("transition-all hover:shadow-lg hover:-translate-y-1 bg-white/50 backdrop-blur-sm border-brand-100", className)}>
       <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-100 text-brand-600">
           <Icon className="h-6 w-6" />
        </div>
        <CardTitle className="text-xl font-bold text-slate-800">{title}</CardTitle>
        <CardDescription className="text-slate-600">{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
