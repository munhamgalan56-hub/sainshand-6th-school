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
  const pathname = usePathname() // Одоо яг ямар хуудас дээр байгааг унших Next.js-ийн hook

  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(15,20,60,0.75)',
      backdropFilter: 'blur(24px)',
      borderBottom: '0.5px solid rgba(255,255,255,0.13)',
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto',
        padding: '0 32px', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40, borderRadius: 12,
            background: 'transparent',
            border: '2px solid rgba(120,80,255,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Playfair Display, serif', fontSize: 18, fontWeight: 700, color: '#b49eff',
          }}>6</div>
          <div>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>ЕРӨНХИЙ БОЛОВСРОЛЫН 6-Р СУРГУУЛЬ</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '1.2px', textTransform: 'uppercase' }}>Дорноговь аймаг, Сайншанд сум</div>
          </div>
        </Link>

        <ul style={{ display: 'flex', gap: 4, listStyle: 'none' }}>
          {links.map(l => {
            // Тухайн линк идэвхтэй байгаа эсэхийг шалгах
            const isActive = pathname === l.href;

            return (
              <li key={l.href}>
                <Link 
                  href={l.href} 
                  className="nav-link" // Hover эффектийг ажиллуулах класс
                  style={{ 
                    display: 'block', 
                    padding: '8px 14px', 
                    fontSize: 14, 
                    // Идэвхтэй хуудасны текстийг цагаан, бусдыг нь бүдгэрүүлсэн цагаан болгоно
                    color: isActive ? '#b49eff' : 'rgba(255,255,255,0.75)', 
                    fontWeight: isActive ? '600' : '400',
                    // Идэвхтэй хуудасны арын дэвсгэрийг бага зэрэг гэрэлтүүлнэ
                    background: isActive ? 'rgba(180,158,255,0.1)' : 'transparent',
                    textDecoration: 'none', 
                    borderRadius: 8,
                    transition: 'all 0.2s ease'
                  }}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  )
}