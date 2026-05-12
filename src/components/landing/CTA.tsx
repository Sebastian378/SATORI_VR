import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-surface via-surface-elevated to-accent/40 p-10 md:p-16">
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-primary-glow/15 blur-3xl" />
          <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)]" />

          <div className="relative max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-primary-glow">Empieza ahora</span>
            <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
              Hablemos de cómo automatizar tu empresa
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Una llamada de 30 minutos para entender tu operación y mostrarte
              exactamente qué procesos podemos automatizar primero.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button size="xl" variant="hero" className="rounded-full" asChild>
                <a href="https://wa.me/573193672368" target="_blank" rel="noopener noreferrer">
                  <Calendar className="size-4" />
                  Contáctanos
                </a>
              </Button>
              <Button size="xl" variant="glass" className="rounded-full" asChild>
                <a href="https://www.instagram.com/satori_vr?igsh=MXZqeHdraGtobHhtMg==" target="_blank" rel="noopener noreferrer">
                  Ver Instagram
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
