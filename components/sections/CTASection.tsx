import Link from 'next/link';

export default function CTASection() {
  return (
    <section style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 20px 80px', color: '#fff' }}>
      <div style={{ borderRadius: 20, background: 'linear-gradient(135deg, rgba(120,80,255,0.2), rgba(0,200,180,0.12))', border: '0.5px solid rgba(120,80,255,0.3)', backdropFilter: 'blur(20px)', padding: 'clamp(32px, 5vw, 56px) clamp(20px, 5vw, 48px)', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(22px, 4vw, 38px)', fontWeight: 700, marginBottom: 14 }}>Бидэнтэй холбоо барина уу</h2>
        <p style={{ fontSize: 'clamp(13px, 2vw, 15px)', color: 'rgba(255,255,255,0.6)', marginBottom: 32, maxWidth: 560, margin: '0 auto 32px' }}>Дорноговь аймгийн Сайншанд сумын Ерөнхий Боловсролын 6-р сургуулийн тухай дэлгэрэнгүй мэдээлэл авахыг хүсвэл бидэнтэй холбогдоно уу.</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ padding: '13px 28px', borderRadius: 12, background: 'linear-gradient(135deg, #7850ff, #5a35e0)', border: 'none', color: '#fff', fontSize: 15, fontWeight: 500, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
            Холбоо барих →
          </Link>
          <Link href="/about" style={{ padding: '13px 28px', borderRadius: 12, background: 'rgba(255,255,255,0.07)', border: '0.5px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)', fontSize: 15, cursor: 'pointer', textDecoration: 'none', display: 'inline-block' }}>
            Сургуулийн тухай
          </Link>
        </div>
      </div>
    </section>
  );
}