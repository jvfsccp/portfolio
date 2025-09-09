'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { PiReadCvLogo } from 'react-icons/pi'
import image from '@/assets/heroImg.svg'
import { CarouselComponent } from './carousel'
import Typewriter from './typewriter'
import { Button } from './ui/button'

export function Hero() {
  return (
    <div
      id="home"
      className="font-heading flex flex-col items-center justify-center gap-12 px-4 
      md:mx-40 md:px-10 lg:px-20 min-h-dvh scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 mt-20 md:mt-0 w-full">
        <div className="bg-gradient-to-l border-l-4 border-secondary pl-4 md:pl-10 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-6xl font-bold tracking-tight text-background"
          >
            Olá. <br />
            Eu sou
            <br /> <span className="text-white">João Victor Fernandes</span>
          </motion.h1>

          <p className="text-xl md:text-2xl text-muted-foreground">
            <Typewriter
              words={[
                'Desenvolvedor FullStack',
                'Desenvolvedor React',
                'Desenvolvedor Node.js',
              ]}
              typingSpeed={55}
              deletingSpeed={35}
              pauseTime={1100}
              className="font-bold font-heading text-lg md:text-5xl bg-gradient-to-r from-secondary to-secondary-foreground bg-clip-text text-transparent"
            />
          </p>

          {/* BOTÕES — responsivos, quebram linha e ficam full-width no mobile */}
          <div className="mt-6 font-sans flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href="#projetos" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto cursor-pointer bg-gradient-to-r from-secondary to-secondary-foreground text-white">
                Projetos
              </Button>
            </Link>

            <Link
              href="https://github.com/jvfsccp"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto border-2 border-secondary text-white hover:bg-gradient-to-r from-secondary to-secondary-foreground gap-2">
                <FiGithub />
                GitHub
              </Button>
            </Link>

            <Link
              href="/cv.pdf"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-gradient-to-r from-secondary to-secondary-foreground text-white border-2 border-secondary cursor-pointer gap-2">
                <PiReadCvLogo />
                Visualizar CV
              </Button>
            </Link>
          </div>
        </div>

        <div className="shrink-0">
          <Image src={image} alt="" className="w-60 md:w-fit" />
        </div>
      </div>

      <CarouselComponent />
    </div>
  )
}
