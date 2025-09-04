// src/components/Typewriter.tsx
"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Props = {
  words: string[]
  typingSpeed?: number // ms por caractere ao digitar
  deletingSpeed?: number // ms por caractere ao apagar
  pauseTime?: number // pausa quando a palavra completa
  loop?: boolean
  className?: string
}

export default function Typewriter({
  words,
  typingSpeed = 60,
  deletingSpeed = 40,
  pauseTime = 1200,
  loop = true,
  className,
}: Props) {
  const [index, setIndex] = useState(0) // palavra atual
  const [subIndex, setSubIndex] = useState(0) // quantidade de chars
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index] ?? ""
    // terminou de digitar a palavra -> pausar e começar a apagar
    if (!deleting && subIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), pauseTime)
      return () => clearTimeout(t)
    }
    // terminou de apagar -> próxima palavra
    if (deleting && subIndex === 0) {
      const next = index + 1
      if (!loop && next >= words.length) return
      setIndex(next % words.length)
      setDeleting(false)
      return
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (deleting ? -1 : 1))
      },
      deleting ? deletingSpeed : typingSpeed
    )

    return () => clearTimeout(timeout)
  }, [
    subIndex,
    deleting,
    index,
    words,
    typingSpeed,
    deletingSpeed,
    pauseTime,
    loop,
  ])

  const text = (words[index] ?? "").substring(0, subIndex)

  return (
    <span className={className}>
      {/* texto entra suave quando troca de palavra */}
      <motion.span
        key={`${index}-${deleting}`}
        initial={{ opacity: 0.0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0 }}
      >
        {text}
      </motion.span>
      {/* cursor piscando */}
      <motion.span
        aria-hidden="true"
        className="inline-block w-[1ch] text-white"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.9, repeat: Infinity }}
      >
        |
      </motion.span>
    </span>
  )
}
