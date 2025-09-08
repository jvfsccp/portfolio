export type Project = {
  href: string
  src: string
  alt: string
  title: string
  description: string
  year: string
  techs: string[]
}

export const projectsData: Project[] = [
  {
    href: 'https://awtdevelopment.com',
    src: '/awt-site.png',
    alt: 'AWT Development site',
    title: 'Site AWT Development',
    description:
      'Landing page moderna para a AWT Development, com foco em performance e clareza.',
    year: '2025',
    techs: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Node.js'],
  },
  {
    href: 'https://iamlucca.com',
    src: '/lucca-site.png',
    alt: 'Site Lucca',
    title: 'Site Lucca',
    description:
      'Landing page para divulgar shows do artista Lucca em cruzeiros pelo mundo.',
    year: '2025',
    techs: ['Next', 'TypeScript', 'Tailwind', 'Shadcn'],
  },
  {
    href: 'https://all4chat.rxmos.dev.br/',
    src: '/all4chat-site.png',
    alt: 'All4Chat Site',
    title: 'All4Chat',
    description:
      'Integra chats de Twitch, Kick e YouTube. Atuei integralmente no frontend.',
    year: '2025',
    techs: ['Next', 'TypeScript', 'Tailwind', 'Shadcn'],
  },
  {
    href: 'https://my-portfolio-phi-ivory-24.vercel.app/',
    src: '/portfolio-antigo.png',
    alt: 'Portfólio antigo',
    title: 'Portfólio (Antigo)',
    description:
      'Primeiro portfólio com experimentos de layout e responsividade.',
    year: '2024',
    techs: ['HTML', 'CSS', 'Javascript'],
  },
  // Adicione os demais aqui…
]
