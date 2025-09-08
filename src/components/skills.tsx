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
    <section>
      <div>
        <h2>Skills</h2>
        <p>Skills, ferramentes e tecnologias que utilizo</p>
      </div>
      <div>
        <SiHtml5 />
        <SiCss3 />
        <SiTailwindcss />
        <SiJavascript />
        <SiTypescript />
        <SiReact />
        <SiNextdotjs />
        <SiNodedotjs />
        <SiExpress />
        <SiFastify />
        <SiPostgresql />
        <SiMongodb />
        <SiDocker />
        <SiGit />
      </div>
    </section>
  )
}
