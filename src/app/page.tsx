import { Header } from "@/components/header"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-primary">
      <Header />
      <Hero />
    </div>
  )
}
