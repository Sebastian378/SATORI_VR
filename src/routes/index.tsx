import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problems } from "@/components/landing/Problems";
import { Services } from "@/components/landing/Services";
import { WebDev } from "@/components/landing/WebDev";
import { Flow } from "@/components/landing/Flow";
import { Sectors } from "@/components/landing/Sectors";
import { Difference } from "@/components/landing/Difference";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SATORI — Automatización e IA para empresas" },
      { name: "description", content: "Diseñamos agentes IA y automatizaciones que eliminan tareas repetitivas, aceleran operaciones y multiplican la productividad de tu empresa." },
      { property: "og:title", content: "SATORI — Automatización e IA para empresas" },
      { property: "og:description", content: "Agencia de IA y automatización empresarial. Soluciones a medida para empresas modernas." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problems />
      <Services />
      <WebDev />
      <Flow />
      <Sectors />
      <Difference />
      <CTA />
      <Footer />
    </main>
  );
}
