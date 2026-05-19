'use client'
 
export default function AboutPage() {
  return (
    <section style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '60px 32px 80px' }}>
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#b49eff', fontWeight: 500, marginBottom: 12 }}>Бидний тухай</div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: 16 }}>Сургуулийн тухай</h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 600, lineHeight: 1.8 }}>
          Сайншанд сумын Ерөнхий Боловсролын 6-р сургууль нь 2023 оны 4 дүгээр сарын 5-нд үүсгэн байгуулагдсан. Дорноговь аймгийн Сайншанд хотод байрладаг бөгөөд одоогоор 1,022 сурагчтай.
        </p>
      </div>
 
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginBottom: 48 }}>
        {[
          { icon: '📅', label: 'Байгуулагдсан', value: '2023.04.05' },
          { icon: '👨‍🎓', label: 'Нийт сурагч', value: '1,022' },
          { icon: '👩‍🏫', label: 'Багш, ажилтан', value: '80+' },
          { icon: '🏫', label: 'Анги танхим', value: '34' },
        ].map(s => (
          <div key={s.label} style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.13)', borderRadius: 16, padding: '28px 24px', textAlign: 'center' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontSize: 26, fontWeight: 700, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)' }}>{s.label}</div>
          </div>
        ))}
      </div>
 
      <div style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.11)', borderRadius: 16, padding: '32px', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 700, marginBottom: 16 }}>Сургалтын түвшин</h2>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          {['Бага анги (1–5)', 'Дунд анги (6–9)', 'Ахлах анги (10–12)'].map(l => (
            <div key={l} style={{ padding: '8px 18px', borderRadius: 10, background: 'rgba(120,80,255,0.15)', border: '0.5px solid rgba(120,80,255,0.3)', fontSize: 14, color: '#b49eff' }}>{l}</div>
          ))}
        </div>
      </div>
 
      <div style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.11)', borderRadius: 16, padding: '32px', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Зорилго ба үнэт зүйлс</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {[
            { icon: '🎯', title: 'Эрхэм зорилго', desc: 'Чадварлаг, бүтээлч, хариуцлагатай иргэн төлөвшүүлэх' },
            { icon: '💡', title: 'Инноваци', desc: 'Орчин үеийн технологийг сургалтад нэвтрүүлэх' },
            { icon: '🤝', title: 'Хамтын ажиллагаа', desc: 'Эцэг эх, нийгэмтэй нягт хамтран ажиллах' },
            { icon: '🌱', title: 'Хөгжил', desc: 'Сурагч бүрийн авьяас чадварыг дэмжих' },
          ].map(v => (
            <div key={v.title} style={{ background: 'rgba(120,80,255,0.08)', border: '0.5px solid rgba(120,80,255,0.2)', borderRadius: 12, padding: '20px' }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>{v.icon}</div>
              <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 6 }}>{v.title}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>
 
      <div style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.11)', borderRadius: 16, padding: '32px', marginBottom: 24 }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Ололт амжилт</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {[
            { year: '2023-2026', title: 'Цахилгаан хөгжмийн ХЭМНЭЛ хамтлаг', desc: 'Олон улс, улс, бүсийн тэмцээнүүдээс 4 алт, 6 мөнгө, 7 хүрэл медаль хүртсэн.' },
            { year: '2023-2026', title: 'Сагсан бөмбөгийн TIGERS баг', desc: 'Ирээдүй хүүхдийн лигийн мөнгө, хүрэл медаль хүртсэн.' },
            { year: '2023-2026', title: 'Ардын хөгжмийн ТЭМҮҮЛЭЛ хамтлаг', desc: 'Аймгийн хүүхдийн Яргуй наадмын хошой хүрэл медаль хүртсэн.' },
          ].map(a => (
            <div key={a.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', borderRadius: 12, padding: '16px 20px' }}>
              <div style={{ minWidth: 52, height: 52, borderRadius: 10, background: 'rgba(120,80,255,0.2)', border: '0.5px solid rgba(120,80,255,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, color: '#b49eff' }}>{a.year}</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 4 }}>{a.title}</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{a.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
 
      <div style={{ background: 'rgba(255,255,255,0.05)', border: '0.5px solid rgba(255,255,255,0.11)', borderRadius: 16, padding: '32px' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 24, fontWeight: 700, marginBottom: 20 }}>Холбоо барих, Байршил</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16 }}>
          {[
            { icon: '📍', label: 'Хаяг', value: 'Дорноговь аймаг, Сайншанд сум, 6-р баг, Алтанхолоо 4-402 тоот' },
            { icon: '📞', label: 'Утас', value: '+976 7052-5270' },
            { icon: '✉️', label: 'И-мэйл', value: 'school6@sainshand.edu.mn' },
            { icon: '🕐', label: 'Цагийн хуваарь', value: 'Даваа–Баасан: 08:00–18:00' },
          ].map(c => (
            <div key={c.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 22, marginTop: 2 }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: 12, color: '#b49eff', fontWeight: 500, marginBottom: 4, textTransform: 'uppercase', letterSpacing: '0.8px' }}>{c.label}</div>
                <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{c.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}>
          
        </div>
      </div>
 
    </section>
  )
}