import { ReactNode } from "react"

interface Props{
  children: ReactNode
  title: string
  subtitle: string
}

export default function Card({children, title, subtitle}:Props){
  return(
      <div className="flex flex-col border rounded-2xl border-stone-800 p-5 divide-y-6 divide-teal-900">
        <div className="flex flex-col pb-3">
          <span className="text-teal-500 font-bold text-3xl ">
            {title}
          </span>
          <span className="text-teal-600 font-semibold text-2xl">
            {subtitle}
          </span>
        </div>
        <div className="text-neutral-50 pt-3">
          {children}
        </div>
      </div>
  )
}