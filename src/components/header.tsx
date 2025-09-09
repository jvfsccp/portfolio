'use client'

import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Button } from './ui/button'

const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Sobre' },
  { href: '#services', label: 'Serviços' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact', label: 'Contato' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary text-background font-heading shadow-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <h1 className="md:text-2xl font-heading font-bold text-sm">
          João Victor Fernandes
        </h1>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-10 text-sm font-medium">
            {NAV.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="transition-opacity hover:opacity-80 focus:outline-none"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Button
          className="inline-flex items-center justify-center rounded-md p-2 md:hidden focus:outline-none focus:ring-2 focus:ring-background/30"
          aria-label="Abrir menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </div>

      <div
        className={`md:hidden transition-[max-height,opacity] duration-300 ease-out overflow-hidden
        ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="border-t border-background/10">
          <ul className="flex flex-col gap-2 px-4 py-4 text-base">
            {NAV.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="block w-full rounded-md px-2 py-2 transition hover:bg-background/10 focus:outline-none focus:ring-2 focus:ring-background/30"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
