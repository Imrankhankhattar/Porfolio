import { Activity, Gauge, Layers, ServerCog, type LucideIcon } from "lucide-react";
import { services, type Service } from "@/lib/data/services";
import { StaggerGroup, StaggerItem } from "@/components/reveal";

const ICONS: Record<Service["icon"], LucideIcon> = { ServerCog, Gauge, Layers, Activity };

export function ServicesSection() {
  return (
    <StaggerGroup className="grid gap-4 sm:grid-cols-2">
      {services.map((service) => {
        const Icon = ICONS[service.icon];
        return (
          <StaggerItem key={service.id}>
            <div className="group h-full rounded-lg border border-black/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-lg hover:shadow-emerald-500/10 dark:border-white/10">
              <div className="bg-gradient-brand inline-flex h-10 w-10 items-center justify-center rounded-md text-white">
                <Icon size={20} />
              </div>
              <p className="mt-4 font-medium">{service.title}</p>
              <p className="mt-1.5 text-sm text-foreground/60">{service.description}</p>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
