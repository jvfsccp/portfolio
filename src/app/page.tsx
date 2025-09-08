import { About } from '@/components/about'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
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
    </div>
  )
}
