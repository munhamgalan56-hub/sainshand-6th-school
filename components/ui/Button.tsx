import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'ghost'
  onClick?: () => void
}

export default function Button({ children, variant = 'primary', onClick }: ButtonProps) {
  const styles = variant === 'primary'
    ? { padding: '13px 28px', borderRadius: 12, background: 'linear-gradient(135deg, #7850ff, #5a35e0)', border: 'none', color: '#fff', fontSize: 15, fontWeight: 500, cursor: 'pointer' }
    : { padding: '13px 28px', borderRadius: 12, background: 'rgba(255,255,255,0.07)', border: '0.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)', fontSize: 15, cursor: 'pointer' }
  return <button style={styles} onClick={onClick}>{children}</button>
}
