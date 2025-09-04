import Link from "next/link"

export function Header() {
  return (
    <header className="flex text-background items-center justify-around bg-primary w-full h-24 font-heading">
      <h1 className="font-bold text-2xl">João Victor Fernandes</h1>
      <nav className="flex items-center">
        <ul className="flex items-center gap-10 font-medium text-sm font-heading">
          <Link href="">
            <li>Home</li>
          </Link>

          <Link href="">
            <li>Sobre</li>
          </Link>

          <Link href="">
            <li>Serviços</li>
          </Link>

          <Link href="">
            <li>Skills</li>
          </Link>

          <Link href="">
            <li>Projetos</li>
          </Link>

          <Link href="">
            <li>Contato</li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
