import type { LucideIcon } from 'lucide-react'

type Props = {
  icon: LucideIcon
  title: string
  description: string
  /** left | right — usado para posicionar o card no fluxo em telas md+ */
  side?: 'left' | 'right'
}

export function ServiceCard({
  icon,
  title,
  description,
  side = 'left',
}: Props) {
  const Icon = icon

  return (
    <div
      className={[
        // Wrapper controla alinhamento no fluxo
        'relative w-full md:flex md:items-center',
        side === 'left' ? 'md:justify-start' : 'md:justify-end',
        'py-10', // espaço vertical entre itens
      ].join(' ')}
    >
      {/* Conector horizontal (só em md+) */}
      <span
        aria-hidden
        className={[
          'hidden md:block absolute top-1/2 h-px bg-white/15',
          side === 'left'
            ? 'left-[calc(50%-80px)] w-20' // puxa 80px da linha central p/ o card
            : 'left-1/2 w-20', // 80px para a direita
        ].join(' ')}
      />
      {/* Marcador na linha central (só em md+) */}
      <span
        aria-hidden
        className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-white/25 ring-4 ring-white/10"
      />

      {/* Card */}
      <div
        className={[
          'relative bg-carousel text-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.25)]',
          'p-6 md:p-7 max-w-xl w-full',
          'border border-white/5 backdrop-blur-sm',
        ].join(' ')}
      >
        <div className="flex items-center gap-4">
          <Icon className="text-white/90" size={44} />
          <h2 className="font-heading text-2xl md:text-3xl font-semibold">
            {title}
          </h2>
        </div>
        <p className="mt-3 font-sans text-base md:text-lg text-white/85">
          {description}
        </p>
      </div>
    </div>
  )
}
