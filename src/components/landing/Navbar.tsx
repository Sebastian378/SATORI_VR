import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <nav className="glass rounded-full flex items-center justify-between px-4 py-2.5">
          <a href="#" className="flex items-center gap-2 pl-2 group">
            <span className="relative font-display font-extrabold tracking-[0.25em] text-xl sm:text-2xl text-logo-gradient animate-fade-in transition-all duration-500 group-hover:text-foreground group-hover:drop-shadow-[0_0_20px_rgba(180,120,255,0.3)]">
              SATORI
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gradient-to-r from-transparent via-primary-glow to-transparent transition-all duration-500 group-hover:w-full opacity-50" />
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground transition-colors">Servicios</a>
            <a href="#web" className="hover:text-foreground transition-colors">Web</a>
            <a href="#flujo" className="hover:text-foreground transition-colors">Flujo</a>
            <a href="#sectores" className="hover:text-foreground transition-colors">Sectores</a>
            <a href="#diferencia" className="hover:text-foreground transition-colors">Diferencia</a>
          </div>
          <Button size="sm" variant="hero" className="rounded-full" asChild>
            <a href="https://wa.me/573193672368" target="_blank" rel="noopener noreferrer">Contáctanos</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
