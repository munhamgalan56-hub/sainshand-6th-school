const levels = [
  {
    icon: '📗',
    title: 'Бага анги',
    subtitle: '1–5-р анги',
    desc: 'Суурь мэдлэг, уншлага, тоо бодлого, бүтээлч сэтгэлгээг хөгжүүлэх орчин.',
    color: 'rgba(0,200,180,0.15)',
    border: 'rgba(0,200,180,0.25)',
  },
  {
    icon: '📘',
    title: 'Дунд анги',
    subtitle: '6–9-р анги',
    desc: 'Шинжлэх ухаан, математик, хэл бичгийн гүнзгийрүүлсэн хөтөлбөр.',
    color: 'rgba(120,80,255,0.15)',
    border: 'rgba(120,80,255,0.25)',
  },
  {
    icon: '📙',
    title: 'Ахлах анги',
    subtitle: '10–12-р анги',
    desc: 'Их сургуульд элсэх бэлтгэл, олимпиад, мэргэжлийн чиглэлийн хичээлүүд.',
    color: 'rgba(255,183,0,0.15)',
    border: 'rgba(255,183,0,0.25)',
  },
]



export default function FeaturesSection() {
  return (
    <section id="features" style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 32px 80px' }}>
      {/* School levels */}
      <div style={{ marginBottom: 52 }}>
        <div style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#b49eff', fontWeight: 500, marginBottom: 12 }}>Сургалтын түвшин</div>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, marginBottom: 16 }}>Бага · Дунд · Ахлах</h2>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 500, lineHeight: 1.7 }}>1-р ангиас 12-р анги хүртэл тасралтгүй, чанартай боловсрол олгодог.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 48 }}>
        {levels.map(l => (
          <div key={l.title} style={{ background: l.color, backdropFilter: 'blur(20px)', border: `0.5px solid ${l.border}`, borderRadius: 16, padding: 28 }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{l.icon}</div>
            <div style={{ fontSize: 17, fontWeight: 600, marginBottom: 4 }}>{l.title}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', marginBottom: 10, letterSpacing: 0.5 }}>{l.subtitle}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{l.desc}</div>
          </div>
        ))}
      </div>

      
    </section>
  )
}
