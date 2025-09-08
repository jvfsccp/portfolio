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
    <div className="font-heading flex flex-col gap-12 items-center justify-center mx-40 min-h-dvh">
      <div className="flex items-center gap-12">
        <div className="border-l-4 border-secondary bg-gradient-to-l pl-10">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-6xl font-bold tracking-tight text-background"
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
              className="font-bold font-heading text-6xl bg-gradient-to-r from-secondary to-secondary-foreground bg-clip-text text-transparent"
            />
          </p>
          <div className="mt-6 font-sans flex items-center gap-4">
            <Button
              variant="link"
              className="cursor pointer bg-gradient-to-r from-secondary to-secondary-foreground text-white"
            >
              Projetos
            </Button>
            <Link
              href="http://github.com/jvfsccp"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                variant="link"
                className="border-2 border-secondary text-white hover:bg-gradient-to-r from-secondary to-secondary-foreground"
              >
                <FiGithub />
                GitHub
              </Button>
            </Link>
            <Link href="/cv.pdf" target="_blank" rel="noreferrer">
              <Button className="bg-gradient-to-r from-secondary to-secondary-foreground text-white border-2 border-secondary cursor-pointer">
                <PiReadCvLogo />
                Visualizar CV
              </Button>
            </Link>
          </div>
        </div>
        <div>
          <Image src={image} alt="" />
        </div>
      </div>
      <CarouselComponent />
    </div>
  )
}
