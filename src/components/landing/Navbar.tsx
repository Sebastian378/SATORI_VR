import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <nav className="glass rounded-full flex items-center justify-between px-4 py-2.5">
          <a href="#" className="flex items-center gap-2 pl-2">
            <div className="size-7 rounded-lg bg-gradient-to-br from-primary to-primary-glow grid place-items-center">
              <Sparkles className="size-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold tracking-tight">Nexora</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
            <a href="#flujo" className="hover:text-foreground transition-colors">Flujo</a>
            <a href="#sectores" className="hover:text-foreground transition-colors">Sectores</a>
            <a href="#diferencia" className="hover:text-foreground transition-colors">Diferencia</a>
          </div>
          <Button size="sm" variant="hero" className="rounded-full">Agendar llamada</Button>
        </nav>
      </div>
    </header>
  );
}
