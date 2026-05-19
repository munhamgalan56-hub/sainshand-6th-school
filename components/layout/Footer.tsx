export default function Footer() {
  return (
    <footer style={{ borderTop: '0.5px solid rgba(255,255,255,0.11)', background: 'rgba(10,15,50,0.7)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '40px 32px 32px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'transparent', border: '2px solid rgba(120,80,255,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 700, color: '#b49eff' }}>6</div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 600 }}>ЕРӨНХИЙ БОЛОВСРОЛЫН 6-Р СУРГУУЛЬ</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: '1.2px', textTransform: 'uppercase' }}>Дорноговь аймаг, Сайншанд сум</div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, maxWidth: 240 }}>Эх хэл соёлоо дээдэлсэн, соёлтой иргэнийг бэлтгэнэ.</p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 8 }}>Үүсгэн байгуулагдсан: 2023.04.05</p>
        </div>
        {[
          { title: 'Сургалт', items: ['Бага анги', 'Дунд анги', 'Ахлах анги'] },
          { title: 'Сургууль', items: ['Бидний хамт олон', 'Мэдээ', 'Холбоо барих', 'Тухай'] },
          { title: 'Холбоо', items: ['Дорноговь аймаг, Сайншанд сум, 6-р баг, Алтанжолоо 4-402 тоот', '+976 7052-5270', 'info@school6.mn'] },
        ].map(col => (
          <div key={col.title}>
            <h4 style={{ fontSize: 13, fontWeight: 500, marginBottom: 14 }}>{col.title}</h4>
            <ul style={{ listStyle: 'none' }}>
              {col.items.map(i => <li key={i} style={{ marginBottom: 8, fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 32px', borderTop: '0.5px solid rgba(255,255,255,0.11)', display: 'flex', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,0.35)' }}>
        <span>© 2025–2026 Дорноговь, Сайншанд 6-р Сургууль. Хөгжүүлэлт хийсэн Төгсөгч Г.Мөнх-Амгалан, Б.Мөнхсайн</span>
        <span>Next.js + Tailwind CSS</span>
      </div>
    </footer>
  )
}
