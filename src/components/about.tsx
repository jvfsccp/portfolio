import { CodeXml, TabletSmartphone } from 'lucide-react'
import Image from 'next/image'
import line from '@/assets/line-about.svg'
import circle from '@/assets/rounded-about.svg'

export function About() {
  return (
    <div className="flex items-start justify-around text-white font-heading">
      <div className="flex items-center gap-12">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2 items-center">
              <Image src={circle} alt="circle" />
              <Image src={line} alt="line" />
            </div>
            <div className="flex items-center gap-4">
              <CodeXml size={60} />
              <h2 className="font-heading font-semibold text-xl w-64">
                WebSite Development
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2 items-center">
              <Image src={circle} alt="circle" />
              <Image src={line} alt="line" />
              <Image src={circle} alt="circle" />
            </div>
            <div className="flex items-center gap-4">
              <TabletSmartphone size={60} />
              <h2 className="font-heading font-semibold text-xl w-64">
                Mobile Development
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-96 space-y-4">
        <h2 className="font-heading font-semibold text-4xl">Sobre mim</h2>
        <p className="font-sans text-xl font-normal w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo optio id
          officiis nobis nesciunt molestiae alias eligendi aspernatur possimus
          sapiente nihil, veniam temporibus beatae excepturi voluptate saepe
          tempore, eaque cupiditate!
        </p>
      </div>
    </div>
  )
}
