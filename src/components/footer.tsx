import { Mail } from 'lucide-react'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Button } from './ui/button'

export function Footer() {
  return (
    <footer
      className="w-full h-fit flex flex-col items-center mt-40 border-t-2 border-carousel font-heading text-white scroll-mt-24"
      id="contact"
    >
      <div className="font-heading space-y-2 mt-20 text-center">
        <h2 className="font-heading font-semibold text-2xl md:text-4xl">
          Fale comigo.
        </h2>
        <p className="font-sans font-normal text-lg md:text-3xl bg-gradient-to-r from-secondary to-secondary-foreground bg-clip-text text-transparent">
          Você tem um projeto em aberto?
        </p>
        <p className="font-sans font-normal text-lg md:text-2xl">
          Estou disponível para o trabalho.
        </p>
        <div className="mt-8">
          <Link
            href="mailto:joaovictorfernandescastro@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="bg-gradient-to-r from-secondary to-secondary-foreground text-white cursor-pointer font-sans md:text-2xl">
              Entre em contato
            </Button>
          </Link>
        </div>
      </div>
      <div className="flex md:flex-row flex-col items-start md:items-center md:gap-12 gap-4 mt-12 text-sm md:text-xl">
        <div>
          <Link
            href="mailto:joaovictorfernandescastro@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <Mail />
            <p>Email</p>
          </Link>
        </div>

        <div>
          <Link
            href="https://wa.me/5562981814320"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaWhatsapp className="text-2xl" />
            Whatsapp
          </Link>
        </div>

        <div>
          <Link
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/joao-victor-fernandes-castro/"
            className="flex items-center gap-2 hover:underline"
          >
            <FaLinkedin className="text-2xl" />
            Linkedin
          </Link>
        </div>

        <div>
          <Link
            href="https://github.com/jvfsccp"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 hover:underline"
          >
            <FaGithub className="text-2xl" />
            GitHub
          </Link>
        </div>
      </div>

      <div className="flex md:flex-row flex-col items-center gap-2 mt-20 md:py-10 py-18 text-sm md:text-xl">
        Desenvolvido por
        <Link
          href="https://github.com/jvfsccp"
          target="_blank"
          rel="noreferrer"
          className="italic font-semibold font-heding hover:underline"
        >
          {' '}
          © João Victor Fernandes
        </Link>
        <span className="hidden md:block">|</span>
        <p>2025</p>
      </div>
    </footer>
  )
}
