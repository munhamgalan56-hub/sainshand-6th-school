import Link from 'next/link';

export default function HeroSection() {
  return (
    <section style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: 'clamp(60px, 10vw, 100px) 20px 80px', color: '#fff' }}>
      {/* Background orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, #3a18bb, transparent 70%)', filter: 'blur(80px)', opacity: 0.4, top: -160, right: -140 }} />
        <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, #00a090, transparent 70%)', filter: 'blur(80px)', opacity: 0.35, bottom: -120, left: -120 }} />
      </div>

      <div style={{ maxWidth: 600 }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', borderRadius: 20, background: 'rgba(0,200,180,0.1)', border: '0.5px solid rgba(0,200,180,0.35)', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', color: '#00e5cd', marginBottom: 24 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#00e5cd', display: 'inline-block' }} />
          2025–2026 хичээлийн жил
        </div>

        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(30px, 5vw, 56px)', fontWeight: 800, lineHeight: 1.15, marginBottom: 20 }}>
          Ирээдүйг <span style={{ color: '#b49eff' }}>чанартай</span><br />боловсролоор бүтээе
        </h1>

        <p style={{ fontSize: 'clamp(14px, 2vw, 16px)', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 440, marginBottom: 36 }}>
          Сайншанд сумын 6-р сургууль — орчин үеийн технологи, туршлагатай багш нарын хамт таны хүүхдийн ирээдүйг хөгжүүлнэ.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
          <Link
            href="/about"
            style={{ padding: '13px 28px', borderRadius: 12, background: 'rgba(255,255,255,0.08)', border: '0.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.9)', fontSize: 15, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}
          >
            Дэлгэрэнгүй үзэх
          </Link>
          <Link
            href="/contact"
            style={{ padding: '13px 28px', borderRadius: 12, background: 'linear-gradient(135deg, #7850ff, #5a35e0)', border: 'none', color: '#fff', fontSize: 15, fontWeight: 500, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}
          >
            Холбоо барих →
          </Link>
        </div>

        <div className="hero-stats">
          {[
            { num: '1,022', label: 'Нийт сурагч' },
            { num: '52', label: 'Мэргэшсэн багш' },
            { num: '98%', label: 'Төгсөлтийн амжилт' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: 'clamp(22px, 4vw, 28px)', fontWeight: 700 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-stats {
          display: flex;
          gap: 32px;
          flex-wrap: wrap;
        }
        @media (max-width: 480px) {
          .hero-stats {
            gap: 16px;
            justify-content: space-between;
          }
          .hero-stats > div {
            flex: 1;
            min-width: 80px;
            text-align: left;
          }
        }
      `}</style>
    </section>
  );
}