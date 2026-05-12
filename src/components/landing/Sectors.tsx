import { ShoppingBag, UtensilsCrossed, Stethoscope, Building2, Store, Briefcase } from "lucide-react";

const sectors = [
  { icon: ShoppingBag, name: "Ecommerce", desc: "Recuperación de carritos, atención post-venta y soporte automático multicanal." },
  { icon: UtensilsCrossed, name: "Restaurantes", desc: "Reservas, pedidos y confirmaciones gestionados sin intervención humana." },
  { icon: Stethoscope, name: "Clínicas", desc: "Agenda médica, recordatorios y triage inicial vía WhatsApp con IA." },
  { icon: Building2, name: "Inmobiliarias", desc: "Calificación de leads, agenda de visitas y seguimiento de prospectos." },
  { icon: Store, name: "Negocios locales", desc: "Atención inmediata, consultas frecuentes y captación de clientes 24/7." },
  { icon: Briefcase, name: "Empresas de servicios", desc: "Onboarding de clientes, cotizaciones y operaciones internas automatizadas." },
];

export function Sectors() {
  return (
    <section id="sectores" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-primary-glow">Casos de uso</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-semibold tracking-tight">
            Soluciones que se adaptan<br />a tu industria
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {sectors.map((s) => (
            <div key={s.name} className="group relative rounded-2xl border border-border bg-surface p-6 hover:border-primary/40 transition-all duration-500 hover:-translate-y-1">
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(400px circle at 50% 0%, color-mix(in oklab, var(--primary) 15%, transparent), transparent 60%)" }} />
              <div className="relative">
                <div className="size-11 rounded-xl bg-accent/40 text-primary-glow grid place-items-center">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
