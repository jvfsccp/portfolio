"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { FiGithub } from "react-icons/fi"
import { PiReadCvLogo } from "react-icons/pi"
import image from "@/assets/heroImg.svg"
import { CarouselComponent } from "./carousel"
import Typewriter from "./typewriter"
import { Button } from "./ui/button"

export function Hero() {
  return (
    <div
      id="home"
      className="font-heading flex flex-col items-center justify-center gap-12 px-4
      md:mx-12 md:px-8 lg:mx-24 lg:px-16 xl:mx-40 min-h-dvh scroll-mt-24"
    >
      <div className="flex flex-col md:flex-row md:items-center gap-12 md:gap-8 lg:gap-12 mt-20 md:mt-0 w-full">
        {/* ESQUERDA */}
        <div className="bg-gradient-to-l border-l-4 border-secondary pl-4 md:pl-10 md:flex-1 max-w-full">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-2xl md:text-5xl lg:text-4xl 2xl:text-6xl font-bold text-background"
          >
            Olá. <br />
            Eu sou
            <br /> <span className="text-white">João Victor Fernandes</span>
          </motion.h1>

          <p className="text-xl md:text-2xl text-muted-foreground">
            <Typewriter
              words={[
                "Desenvolvedor FullStack",
                "Desenvolvedor React",
                "Desenvolvedor Node.js",
              ]}
              typingSpeed={55}
              deletingSpeed={35}
              pauseTime={1100}
              className="font-bold font-heading text-lg md:text-4xl lg:text-3xl 2xl:text-5xl bg-gradient-to-r from-secondary to-secondary-foreground bg-clip-text text-transparent"
            />
          </p>

          <div className="mt-6 font-sans flex flex-col md:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
            <Link href="#projects" className="w-full sm:w-auto">
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

        {/* DIREITA */}
        <div className="md:flex-1 flex justify-center md:justify-end">
          <Image
            src={image}
            alt=""
            priority
            sizes="(min-width: 1024px) 420px, (min-width: 768px) 360px, 240px"
            className="w-40 md:w-72 lg:w-[420px] h-auto"
          />
        </div>
      </div>

      <CarouselComponent />
    </div>
  )
}
