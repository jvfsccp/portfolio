'use client'
import AutoScroll from 'embla-carousel-auto-scroll'
import type { JSX } from 'react'
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastify,
  SiFirebase,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'

const ICONS = [
  {
    id: 'html',
    render: () => <SiHtml5 className="text-[#E34F26] text-6xl" />,
  },
  {
    id: 'css',
    render: () => <SiCss3 className="text-[#280FEE] text-6xl" />,
  },
  {
    id: 'js',
    render: () => <SiJavascript className="text-[#F7DF1E] text-6xl" />,
  },
  {
    id: 'ts',
    render: () => <SiTypescript className="text-[#3178C6] text-6xl" />,
  },
  {
    id: 'react',
    render: () => <SiReact className="text-[#61DAFB] text-6xl" />,
  },
  {
    id: 'next',
    render: () => <SiNextdotjs className="text-white text-6xl" />,
  },
  {
    id: 'node',
    render: () => <SiNodedotjs className="text-[#5FA04E] text-6xl" />,
  },
  {
    id: 'express',
    render: () => <SiExpress className="text-white text-6xl" />,
  },
  {
    id: 'fastify',
    render: () => <SiFastify className="text-white text-6xl" />,
  },
  {
    id: 'tailwind',
    render: () => <SiTailwindcss className="text-[#06B6D4] text-6xl" />,
  },
  {
    id: 'git',
    render: () => <SiGit className="text-[#F05032] text-6xl block" />,
  },
  {
    id: 'docker',
    render: () => <SiDocker className="text-[#2496ED] text-6xl" />,
  },

  {
    id: 'postgres',
    render: () => <SiPostgresql className="text-[#4169E1] text-6xl" />,
  },

  {
    id: 'mongodb',
    render: () => <SiMongodb className="text-[#47A248] text-6xl" />,
  },

  {
    id: 'firebase',
    render: () => <SiFirebase className="text-[#DD2C00] text-6xl" />,
  },
]
const duplicateWithUid = (
  list: { id: string; render: () => JSX.Element }[],
  times = 2
) =>
  Array.from({ length: times }, (_, rep) =>
    list.map((item) => ({ ...item, uid: `${item.id}-rep${rep}` }))
  ).flat()
export function CarouselComponent() {
  const SLIDES = duplicateWithUid(ICONS, 4)

  return (
    <Carousel
      opts={{
        loop: true,
        align: 'start',
        dragFree: false,
        containScroll: false,
        watchDrag: false,
      }}
      plugins={[
        AutoScroll({
          playOnInit: true,
          speed: 1.5,
        }),
      ]}
      className="min-w-full max-w-screen bg-carousel p-2"
    >
      <CarouselContent className="-ml-2 [&>*]:pl-2 items-center">
        {SLIDES.map((item) => (
          <CarouselItem
            key={item.uid}
            className="basis-14 mt-4 md:basis-1/12 shrink-0 flex items-center justify-center"
          >
            {item.render()}
          </CarouselItem>
        ))}
      </CarouselContent>
       
    </Carousel>
  )
}
