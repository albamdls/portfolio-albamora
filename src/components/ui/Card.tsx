type Props = { children: React.ReactNode; className?: string }

export default function Card({ children, className = "" }: Props) {
    return (
        <div
            className={`rounded-2xl border border-slate-200 bg-white/60 p-6 shadow-sm backdrop-blur
      dark:border-slate-800 dark:bg-slate-900/30 ${className}`}
        >
            {children}
        </div>
    )
}
