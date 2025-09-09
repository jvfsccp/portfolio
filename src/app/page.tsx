import { About } from '@/components/about'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Projects } from '@/components/projects/projects'
import { Services } from '@/components/services/services'
import { Skills } from '@/components/skills'

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-primary min-w-screen">
      <Header />

      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />

      <Footer />
    </div>
  )
}
