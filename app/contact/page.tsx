'use client'
export default function ContactPage() {
  return (
    <section style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '60px 32px 80px' }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#b49eff', fontWeight: 500, marginBottom: 12 }}>Бидэнтэй холбогдох</div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: 14 }}>Холбоо барих</h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 500, lineHeight: 1.7 }}>Асуулт, санал хүсэлт байвал доорх мэдээллээр бидэнтэй холбогдоно уу.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.13)', borderRadius: 16, padding: '24px 28px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(120,80,255,0.15)', border: '0.5px solid rgba(120,80,255,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>📍</div>
            <div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>Хаяг</div>
              <div style={{ fontSize: 15, fontWeight: 500, lineHeight: 1.6 }}>Дорноговь аймаг, Сайншанд сум <br />6-р баг, Алтанжолоо 4-402 тоот</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.13)', borderRadius: 16, padding: '24px 28px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(0,200,180,0.15)', border: '0.5px solid rgba(0,200,180,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>📞</div>
            <div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>Утас</div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>+976 7052-5270</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>Даваа–Баасан: 08:00–18:00</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.13)', borderRadius: 16, padding: '24px 28px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,183,0,0.15)', border: '0.5px solid rgba(255,183,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>✉️</div>
            <div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>И-мэйл</div>
              <div style={{ fontSize: 15, fontWeight: 500 }}>school6sainshand@gmail.com</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.13)', borderRadius: 16, padding: '24px 28px', display: 'flex', gap: 18, alignItems: 'flex-start' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(24,119,242,0.15)', border: '0.5px solid rgba(24,119,242,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>📱</div>
            <div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>Сошиал медиа</div>
              <a href="https://www.facebook.com/people/%D0%94%D0%BE%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%D0%B2%D1%8C-%D0%B0%D0%B9%D0%BC%D0%B3%D0%B8%D0%B9%D0%BD-%D0%A1%D0%B0%D0%B9%D0%BD%D1%88%D0%B0%D0%BD%D0%B4-%D1%81%D1%83%D0%BC%D1%8B%D0%BD-%D0%B5%D1%80%D3%A9%D0%BD%D1%85%D0%B8%D0%B9-%D0%B1%D0%BE%D0%BB%D0%BE%D0%B2%D1%81%D1%80%D0%BE%D0%BB%D1%8B%D0%BD-VI-%D1%81%D1%83%D1%80%D0%B3%D1%83%D1%83%D0%BB%D1%8C/100090044897994/" target="_blank" rel="noopener noreferrer" style={{ fontSize: 15, fontWeight: 500, color: '#b49eff', textDecoration: 'none' }}>Facebook хуудас →</a>
            </div>
          </div>
          <div style={{ background: 'linear-gradient(135deg, rgba(120,80,255,0.15), rgba(0,200,180,0.1))', border: '0.5px solid rgba(120,80,255,0.25)', borderRadius: 16, padding: '20px 28px', display: 'flex', gap: 28 }}>
            {[{ label: 'Байгуулагдсан', value: '2023.04.05' }, { label: 'Нийт сурагч', value: '1,022' }, { label: 'Багш, ажилтан', value: '82' }].map(s => (
              <div key={s.label}>
                <div style={{ fontSize: 18, fontWeight: 700, color: '#b49eff' }}>{s.value}</div>
                <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '0.5px solid rgba(255,255,255,0.13)', borderRadius: 16, overflow: 'hidden', flex: 1, minHeight: 320 }}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d824.5734192239486!2d110.12509133389428!3d44.88905952008917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5df0f1cf2661fb83%3A0xbfe35ca8a0399bed!2z0JXQkS3Ri9C9IDYt0YAg0YHRg9GA0LPRg9GD0LvRjA!5e0!3m2!1sen!2smn!4v1779104332337!5m2!1sen!2smn" width="100%" height="100%" style={{ border: 0, minHeight: 320, display: 'block', filter: 'invert(90%) hue-rotate(180deg)' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </div>
          <div style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.13)', borderRadius: 16, padding: '24px 28px' }}>
            <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 16 }}>🕐 Ажлын цагийн хуваарь</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[{ day: 'Даваа — Баасан', time: '08:00 — 18:00', active: true }, { day: 'Бямба', time: 'Амарна', active: false }, { day: 'Ням', time: 'Амарна', active: false }].map(r => (
                <div key={r.day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', borderRadius: 10, background: r.active ? 'rgba(0,200,180,0.08)' : 'rgba(255,255,255,0.03)', border: `0.5px solid ${r.active ? 'rgba(0,200,180,0.2)' : 'rgba(255,255,255,0.07)'}` }}>
                  <span style={{ fontSize: 13, color: r.active ? '#fff' : 'rgba(255,255,255,0.4)' }}>{r.day}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: r.active ? '#00e5cd' : 'rgba(255,255,255,0.35)' }}>{r.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}