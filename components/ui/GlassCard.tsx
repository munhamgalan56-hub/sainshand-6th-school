import { ReactNode } from 'react'

interface GlassCardProps {
  children: ReactNode
  className?: string
}

export default function GlassCard({ children }: GlassCardProps) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.055)', backdropFilter: 'blur(20px)', border: '0.5px solid rgba(255,255,255,0.11)', borderRadius: 16 }}>
      {children}
    </div>
  )
}
