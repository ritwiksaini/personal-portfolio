export default function SectionLabel({ children }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="text-[10px] font-medium tracking-[0.3em] uppercase text-gold">
        {children}
      </span>
      <div className="flex-1 h-px bg-ink-900" />
    </div>
  )
}
