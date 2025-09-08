import { CodeXml, MonitorCog, TabletSmartphone } from 'lucide-react'
import { ServiceCard } from './service-card'

export function Services() {
  return (
    <section className="relative flex flex-col border-t-2 border-carousel items-center justify-center mt-20 font-heading">
      <h1 className="text-4xl font-semibold text-white mt-10 mb-10">
        Meus serviços
      </h1>

      <div className="relative w-full max-w-6xl px-6 md:px-10">
        <div
          aria-hidden
          className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10"
        />
        <ServiceCard
          side="left"
          icon={CodeXml}
          title="Desenvolvimento de sites"
          description="Criação de sites modernos, responsivos e otimizados para SEO, entregando a melhor experiência ao usuário."
        />
        <ServiceCard
          side="right"
          icon={TabletSmartphone}
          title="Desenvolvimento mobile"
          description="Aplicativos leves e funcionais, focados em usabilidade e performance para dispositivos móveis."
        />
        <ServiceCard
          side="left"
          icon={MonitorCog}
          title="Desenvolvimento de sistemas"
          description="Soluções sob medida para automatizar processos e integrar áreas do seu negócio com segurança e escalabilidade."
        />
      </div>
    </section>
  )
}
