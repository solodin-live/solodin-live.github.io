import { cn } from "@/lib/utils"

interface PageHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export default function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <div className={cn("text-center mb-8", className)}>
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{title}</h1>
      {subtitle && <p className="text-gray-300 text-lg">{subtitle}</p>}
    </div>
  )
}
