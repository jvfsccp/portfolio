import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastify,
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

export function Skills() {
  return (
    <section
      className="flex flex-col items-center justify-center border-t-2 border-carousel mt-20 font-heading gap-12 scroll-mt-24"
      id="skills"
    >
      <div className="space-y-2 text-center mt-10 text-white">
        <h2 className="font-heading font-semibold md:text-4xl text-2xl">
          Skills
        </h2>
        <p className="font-sans text-sm md:text-2xl font-normal">
          Skills, ferramentas e tecnologias que utilizo.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex items-center gap-2">
          <SiHtml5 className="text-[#E34F26] md:text-6xl text-3xl" />
          <SiCss3 className="text-[#280FEE] md:text-6xl text-3xl" />
          <SiTailwindcss className="text-[#06B6D4] md:text-6xl text-3xl" />
          <SiJavascript className="text-[#F7DF1E] md:text-6xl text-3xl" />
          <SiTypescript className="text-[#3178C6] md:text-6xl text-3xl" />
          <SiReact className="text-[#61DAFB] md:text-6xl text-3xl" />
          <SiNextdotjs className="text-white md:text-6xl text-3xl" />
        </div>
        <div className="flex items-center gap-2">
          <SiNodedotjs className="text-[#5FA04E] md:text-6xl text-3xl" />
          <SiExpress className="text-white md:text-6xl text-3xl" />
          <SiFastify className="text-white md:text-6xl text-3xl" />
          <SiPostgresql className="text-[#4169E1] md:text-6xl text-3xl" />
          <SiMongodb className="text-[#47A248] md:text-6xl text-3xl" />
          <SiDocker className="text-[#2496ED] md:text-6xl text-3xl" />
          <SiGit className="text-[#F05032] md:text-6xl text-3xl" />
        </div>
      </div>
    </section>
  )
}
