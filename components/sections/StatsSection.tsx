const stats = [
  { icon: '🏆', value: '47', label: 'Олимпиадын медаль' },
  { icon: '📚', value: '30+', label: 'Сургалтын хөтөлбөр' },
  { icon: '🎓', value: '3', label: 'Жилийн туршлага' },
  { icon: '⭐', value: '4.8', label: 'Үнэлгээ' },
]

export default function StatsSection() {
  return (
    <section style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '0 32px 80px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
        {stats.map(s => (
          <div key={s.label} style={{ background: 'rgba(255,255,255,0.055)', backdropFilter: 'blur(20px)', border: '0.5px solid rgba(255,255,255,0.11)', borderRadius: 16, padding: '24px', textAlign: 'center' }}>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
