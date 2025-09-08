import { CodeXml, TabletSmartphone } from 'lucide-react'
import Image from 'next/image'
import line from '@/assets/line-about.svg'
import circle from '@/assets/rounded-about.svg'

export function About() {
  return (
    <div className="flex items-start justify-around text-white font-heading">
      <div className="flex items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2 items-center">
              <Image src={circle} alt="circle" />
              <Image src={line} alt="line" />
            </div>
            <div className="flex items-center gap-4">
              <CodeXml size={60} />
              <h2 className="font-heading font-semibold text-lg w-64">
                Desolvimento Web
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2 items-center">
              <Image src={circle} alt="circle" />
              <Image src={line} alt="line" />
              <Image src={circle} alt="circle" />
            </div>
            <div className="flex items-center gap-4">
              <TabletSmartphone size={60} />
              <h2 className="font-heading font-semibold text-lg w-64">
                Desenvolvimento Mobile
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className=" space-y-4">
        <h2 className="font-heading font-semibold text-4xl">Sobre mim</h2>
        <p className="font-sans text-xl font-normal w-2xl">
          Sou João Victor Fernandes, desenvolvedor web focado em React, Node.js
          e Next.js, sempre em busca de criar soluções criativas e funcionais.
          Atualmente, curso Análise e Desenvolvimento de Sistemas e aplico meus
          conhecimentos práticos com foco no frontend, mas que não se limitam
          somente a essa área, podendo ser ampliados para o desenvolvimento
          fullstack. <br /> Sou fanático por futebol e gosto de me desafiar
          constantemente, explorando novas tecnologias e aplicando-as em
          projetos reais. Para mim, programação não é apenas escrever código,
          mas encontrar formas de transformar ideias em experiências digitais
          que façam sentido para as pessoas.
        </p>
      </div>
    </div>
  )
}
