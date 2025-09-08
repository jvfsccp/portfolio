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
    <section className="flex flex-col items-center justify-center border-t-2 border-carousel mt-20 font-heading gap-12">
      <div className="space-y-2 text-center mt-10 text-white">
        <h2 className="font-heading font-semibold text-4xl">Skills</h2>
        <p className="font-sans text-2xl font-normal">
          Skills, ferramentas e tecnologias que utilizo.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-8">
        <div className="flex items-center gap-2">
          <SiHtml5 className="text-[#E34F26] text-6xl" />
          <SiCss3 className="text-[#280FEE] text-6xl" />
          <SiTailwindcss className="text-[#06B6D4] text-6xl" />
          <SiJavascript className="text-[#F7DF1E] text-6xl" />
          <SiTypescript className="text-[#3178C6] text-6xl" />
          <SiReact className="text-[#61DAFB] text-6xl" />
          <SiNextdotjs className="text-white text-6xl" />
        </div>
        <div className="flex items-center gap-2">
          <SiNodedotjs className="text-[#5FA04E] text-6xl" />
          <SiExpress className="text-white text-6xl" />
          <SiFastify className="text-white text-6xl" />
          <SiPostgresql className="text-[#4169E1] text-6xl" />
          <SiMongodb className="text-[#47A248] text-6xl" />
          <SiDocker className="text-[#2496ED] text-6xl" />
          <SiGit className="text-[#F05032] text-6xl" />
        </div>
      </div>
    </section>
  )
}
