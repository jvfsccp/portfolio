'use client'

import Image, { type StaticImageData } from 'next/image'
import Link from 'next/link'
import { Badge } from '../ui/badge'
import { Card, CardContent, CardFooter } from '../ui/card'

type Props = {
  href?: string
  src: StaticImageData | string // aceita import estático OU caminho em /public
  alt: string
  title: string
  description: string
  year: string | number
  techs: string[] // ← AGORA é array para badges dinâmicos
}

export function ProjectsCard({
  href = '#',
  src,
  alt,
  title,
  description,
  year,
  techs,
}: Props) {
  return (
    <Link href={href} className="block" target="_blank">
      <Card className="bg-transparent border-0 hover:scale-[1.02] transition-transform w-xl font-heading">
        <CardContent className="">
          {/* Wrapper com dimensões para o Image fill */}
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 640px, (min-width: 768px) 512px, 100vw"
              className="object-cover rounded-xs"
            />
          </div>

          <CardFooter className="bg-carousel rounded-md flex flex-col gap-2 p-4 items-start">
            <div className="flex items-center justify-between text-white w-full">
              <h2 className="text-xl font-heading font-semibold">{title}</h2>
              <p className="text-xl font-heading font-semibold">{year}</p>
            </div>

            <p className="text-lg font-normal text-white font-sans">
              {description}
            </p>

            {/* Badges dinâmicos */}
            <div className="mt-1 flex flex-wrap gap-2">
              {techs.map((t) => (
                <Badge key={t} className="bg-badge text-foreground">
                  {t}
                </Badge>
              ))}
            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </Link>
  )
}
