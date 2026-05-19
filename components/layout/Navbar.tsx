'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [
  { href: '/', label: 'Нүүр' },
  { href: '/about', label: 'Сургуулийн тухай' },
  { href: '/teachers', label: 'Бидний хамт олон' },
  { href: '/contact', label: 'Холбоо барих' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(15,20,60,0.75)',
      backdropFilter: 'blur(24px)',
      borderBottom: '0.5px solid rgba(255,255,255,0.13)',
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 20px', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* Лого */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12, flexShrink: 0,
            background: 'transparent',
            border: '2px solid rgba(120,80,255,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 700, color: '#b49eff',
          }}>6</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', lineHeight: 1.3 }}>ЕРӨНХИЙ БОЛОВСРОЛЫН 6-Р СУРГУУЛЬ</div>
            <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase' }}>Дорноговь аймаг, Сайншанд сум</div>
          </div>
        </Link>

        {/* Desktop цэс */}
        <ul style={{ display: 'flex', gap: 4, listStyle: 'none', margin: 0, padding: 0 }}
          className="desktop-nav">
          {links.map(l => {
            const isActive = pathname === l.href
            return (
              <li key={l.href}>
                <Link href={l.href} style={{
                  display: 'block', padding: '8px 14px', fontSize: 14,
                  color: isActive ? '#b49eff' : 'rgba(255,255,255,0.75)',
                  fontWeight: isActive ? '600' : '400',
                  background: isActive ? 'rgba(180,158,255,0.1)' : 'transparent',
                  textDecoration: 'none', borderRadius: 8, transition: 'all 0.2s ease'
                }}>
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Hamburger товч — гар утасны дэлгэцэнд харагдана */}
        <button
          className="hamburger"
          onClick={() => setOpen(!open)}
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: 8, color: '#fff', flexShrink: 0,
          }}
          aria-label="Цэс нээх"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile цэс */}
      {open && (
        <div className="mobile-nav" style={{
          background: 'rgba(15,20,60,0.97)',
          borderTop: '0.5px solid rgba(255,255,255,0.1)',
          padding: '12px 20px 20px',
        }}>
          {links.map(l => {
            const isActive = pathname === l.href
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block', padding: '14px 16px', fontSize: 15,
                  color: isActive ? '#b49eff' : 'rgba(255,255,255,0.85)',
                  fontWeight: isActive ? '600' : '400',
                  background: isActive ? 'rgba(180,158,255,0.1)' : 'transparent',
                  textDecoration: 'none', borderRadius: 10, marginBottom: 4,
                  borderLeft: isActive ? '3px solid #b49eff' : '3px solid transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                {l.label}
              </Link>
            )
          })}
        </div>
      )}

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
      `}</style>
    </header>
  )
}