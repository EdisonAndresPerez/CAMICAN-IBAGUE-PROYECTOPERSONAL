import { ReactNode } from "react"
import { Card } from "../ui/card"

type CardInfoProps = {
  icon: ReactNode
  title: string
  value: string
  subtitle?: string
  ariaLabel?: string
}

export function CardInfo({ icon, title, value, subtitle, ariaLabel }: CardInfoProps) {
  return (
    <Card
      aria-label={ariaLabel ?? title}
      className="group border-2 border-slate-200 bg-white p-6 transition-all duration-500 active:scale-95 md:hover:border-cyan-400 md:hover:shadow-xl md:hover:shadow-cyan-400/10 md:hover:-translate-y-2"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-cyan-400 transition-all duration-500 group-active:bg-cyan-400 group-active:text-slate-950 group-active:scale-110 group-active:rotate-6 md:group-hover:bg-cyan-400 md:group-hover:text-slate-950 md:group-hover:scale-110 md:group-hover:rotate-6 shadow-lg">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-slate-950 transition-colors group-hover:text-cyan-600">{title}</h3>
      <p className="text-slate-600 transition-colors group-hover:text-slate-900 font-medium">{value}</p>
      {subtitle ? <p className="text-sm text-slate-500">{subtitle}</p> : null}
      <div className="mt-4 h-1 w-0 bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full group-hover:w-full transition-all duration-500" />
    </Card>
  )
}

export default CardInfo
