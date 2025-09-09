'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { ProjectsCard } from './projects-card'

export function Projects() {
  const [showAll, setShowAll] = useState(false)

  // Defina aqui quantos mostrar inicialmente
  const initialCount = 4

  // Lista com todos os projetos (mantendo suas props)
  const allProjects = [
    <ProjectsCard
      key="awt"
      href="https://awtdevelopment.com"
      src="/awt-site.png"
      alt="AWT Development site"
      title="Site AWT Development"
      description="Uma landing page moderna e impactante criada para a AWT Development, transmitindo inovação e presença digital para a empresa de soluções web."
      year="2025"
      techs={['React', 'Vite', 'TypeScript', 'Tailwind', 'Node.js']}
    />,
    <ProjectsCard
      key="lucca"
      href="https://iamlucca.com"
      src="/lucca-site.png"
      alt="Site Lucca"
      title="Site Lucca"
      description="Landing page envolvente para divulgar a carreira do artista Lucca, levando sua música e shows em navios ao redor do mundo para o público online."
      year="2025"
      techs={['Next', 'TypeScript', 'Tailwind', 'Shadcn']}
    />,
    <ProjectsCard
      key="all4chat"
      href="https://all4chat.rxmos.dev.br/"
      src="/all4chat-site.png"
      alt="All4Chat Site"
      title="All4Chat"
      description="Plataforma que conecta chats de Twitch, Kick e YouTube em um só lugar, trazendo praticidade e organização para streamers. Atuei integralmente no desenvolvimento do frontend."
      year="2025"
      techs={['Next', 'TypeScript', 'Tailwind', 'Shadcn']}
    />,
    <ProjectsCard
      key="portfolio"
      href=""
      src="/portfolio-novo.png"
      alt="Portfólio"
      title="Portfólio"
      description="O espaço que você está navegando agora: uma vitrine viva dos meus projetos, sempre em evolução."
      year="2025"
      techs={['Next', 'TypeScript', 'Shadcn', 'Framer Motion']}
    />,
    <ProjectsCard
      key="convert"
      href="https://projeto-convert-nine.vercel.app/"
      src="/convert.png"
      alt="Convert - Conversor de moedas"
      title="Convert"
      description="Conversor de moedas prático e intuitivo, suportando euro, libra, real e dólar, pensado para facilitar o dia a dia."
      year="2024"
      techs={['HTML', 'CSS', 'Javascript']}
    />,
    <ProjectsCard
      key="hairday"
      href="https://projeto-hairday.vercel.app/"
      src="/hairday.png"
      alt="hairday - agendamento barbearia"
      title="Hairday"
      description="Um sistema de agendamento simples e funcional para barbearias, focado em praticidade tanto para clientes quanto para profissionais."
      year="2024"
      techs={['HTML', 'CSS', 'Javascript']}
    />,
    <ProjectsCard
      key="Refund"
      href="https://refund-react.vercel.app/"
      src="/refund.png"
      alt="Refund - Sistema de Reembolsos"
      title="Refund"
      description="Projeto voltado para criar um sistema de reembolso rápido e eficiente, simplificando processos financeiros."
      year="2025"
      techs={['React', 'Vite', 'TypeScript', 'Node.js', 'Prisma']}
    />,
    <ProjectsCard
      key="portfolio-antigo"
      href="https://my-portfolio-phi-ivory-24.vercel.app/"
      src="/portfolio-antigo.png"
      alt="Portfólio"
      title="Portfólio (Antigo)"
      description="Meu ponto de partida: um espaço para experimentar ideias, treinar habilidades e compartilhar meus primeiros projetos."
      year="2024"
      techs={['HTML', 'CSS', 'Javascript']}
    />,
  ]

  const visibleProjects = showAll
    ? allProjects
    : allProjects.slice(0, initialCount)

  return (
    <section
      className="flex flex-col items-center justify-center border-t-2 border-carousel font-heading mt-20 text-white scroll-mt-24"
      id="projects"
    >
      <div className="text-center space-y-2 mt-10 mb-8">
        <h2 className="font-heading font-semibold text-2xl md:text-4xl">
          Meus projetos
        </h2>
        <p className="font-sans font-normal text-xs md:text-2xl">
          Meus melhores projetos como desenvolvedor.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center md:w-6xl">
        {visibleProjects}
      </div>

      {allProjects.length > initialCount && (
        <Button
          onClick={() => setShowAll((prev) => !prev)}
          className="mt-6 rounded-2xl px-5 py-2 text-sm font-medium hover:bg-carousel hover:text-white transition cursor-pointer bg-white text-primary"
        >
          {showAll ? 'Mostrar menos' : 'Mostrar tudo'}
        </Button>
      )}
    </section>
  )
}
