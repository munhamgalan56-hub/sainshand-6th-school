'use client'
import { useState } from 'react'

type Staff = {
  id: number
  name: string
  role: string
  dept: string
  category: 'management' | 'teacher' | 'admin'
}

const staffData: Staff[] = [
  // Удирдлага
  { id: 1, name: 'Ц. Одгэрэл', role: 'Захирал', dept: 'Удирдлага', category: 'management' },
  { id: 2, name: 'Ц. Атаржаахан', role: 'Ахлах ангийн сургалтын менежер', dept: 'Удирдлага', category: 'management' }, 
  { id: 3, name: 'Б. Сэмжидмаа', role: 'Бага ангийн сургалтын менежер', dept: 'Удирдлага', category: 'management' },
  { id: 4, name: 'Ц. Анхилуунцэцэг', role: 'Нийгмийн ажилтан', dept: 'Удирдлага', category: 'management' },
 { id: 5, name: 'Г. Энхгэрэл', role: 'Сэтгэл зүйч', dept: 'Удирдлага', category: 'management' },
 { id: 6, name: 'М. Хулан', role: 'Номын санч', dept: 'Удирдлага', category: 'management' },
  { id: 7, name: 'Б. Баярцэцэг', role: 'Архив, бичиг хэргийн ажилтан', dept: 'Удирдлага', category: 'management' },
  { id: 8, name: 'Л. Саранцэцэн', role: 'Нягтлан бодогч', dept: 'Удирдлага', category: 'management' },
  { id: 9, name: 'А. Цэрмаа', role: 'Нярав', dept: 'Удирдлага', category: 'management' },
  { id: 10, name: 'Л. Шинэтуяа', role: 'Эмч', dept: 'Удирдлага', category: 'management' },
  
  // БУЗАН
  { id: 11, name: 'Б. Амартүвшин', role: 'Математик', dept: 'БУЗАН', category: 'teacher' },
  { id: 12, name: 'Н. Бөртэ-Үжин', role: 'Математик', dept: 'БУЗАН', category: 'teacher' },
  { id: 13, name: 'О. Эрдэнэцэцэг', role: 'Математик', dept: 'БУЗАН', category: 'teacher' },
  { id: 14, name: 'Т. Эрдэнэцэцэг', role: 'Математик', dept: 'БУЗАН', category: 'teacher' },

  { id: 15, name: 'Э. Мөнх-Эрдэнэ', role: 'Мэдээллийн технологи', dept: 'БУЗАН', category: 'teacher' },

  { id: 16, name: 'Б. Аргилмаа', role: 'Биологи', dept: 'БУЗАН', category: 'teacher' },
  { id: 17, name: 'Ж. Мөнхөө', role: 'Биологи', dept: 'БУЗАН', category: 'teacher' },

  { id: 18, name: 'Ө. Оджаргал', role: 'Физик', dept: 'БУЗАН', category: 'teacher' },
  { id: 19, name: 'Ж. Баярмаа', role: 'Физик', dept: 'БУЗАН', category: 'teacher' },

  { id: 20, name: 'П. Батцэцэг', role: 'Хими', dept: 'БУЗАН', category: 'teacher' },
  { id: 21, name: 'Д. Уранчимэг', role: 'Хими', dept: 'БУЗАН', category: 'teacher' },

  { id: 22, name: 'Ч. Мөнгөнсүлд', role: 'Газарзүй', dept: 'БУЗАН', category: 'teacher' },

  

  // НУЗАН
  { id: 23, name: 'Ц. Болортуяа', role: 'Монгол хэл, бичиг, уран зохиол', dept: 'НУЗАН', category: 'teacher' },
  { id: 24, name: 'Г.Эрдэнэцэцэг', role: 'Монгол хэл, бичиг, уран зохиол', dept: 'НУЗАН', category: 'teacher' },
  { id: 25, name: 'Б. Цацрал', role: 'Монгол хэл, бичиг, уран зохиол', dept: 'НУЗАН', category: 'teacher' },
  { id: 26, name: 'Э. Хандармаа', role: 'Монгол хэл, бичиг, уран зохиол', dept: 'НУЗАН', category: 'teacher' },
  { id: 27, name: 'О. Ганчимэг', role: 'Монгол хэл, бичиг, уран зохиол', dept: 'НУЗАН', category: 'teacher' },

  { id: 28, name: 'Т. Түвшинсайхан', role: 'Түүх, Нийгэм судлал', dept: 'НУЗАН', category: 'teacher' },
  { id: 29, name: 'А. Буянтогтох', role: 'Түүх, Нийгэм судлал', dept: 'НУЗАН', category: 'teacher' },
  { id: 30, name: 'И. Оюунтуяа', role: 'Түүх, Нийгэм судлал', dept: 'НУЗАН', category: 'teacher' },
  { id: 31, name: 'Б. Одбаяр', role: 'Түүх, Нийгэм судлал', dept: 'НУЗАН', category: 'teacher' },
  { id: 32, name: 'Б. Даваадулам', role: 'Түүх, Нийгэм судлал', dept: 'НУЗАН', category: 'teacher' },

  { id: 33, name: ' Б. Баярмаа', role: 'Англи хэл', dept: 'НУЗАН', category: 'teacher' },
   { id:34, name: 'Г. Долгор', role: 'Англи хэл', dept: 'НУЗАН', category: 'teacher' },
  { id: 35, name: 'З. Золзаяа', role: 'Англи хэл', dept: 'НУЗАН', category: 'teacher' },
  { id: 36, name: 'Л. Мөнхбаясгалан', role: 'Англи хэл', dept: 'НУЗАН', category: 'teacher' },
  { id: 37, name: 'У. Ганхүү', role: 'Англи хэл', dept: 'НУЗАН', category: 'teacher' },
  { id: 38, name: 'Austin Katz', role: 'Англи хэл', dept: 'НУЗАН', category: 'teacher' },

  { id: 39, name: 'О. Отгон-Эрдэнэ', role: 'Орос хэл', dept: 'НУЗАН', category: 'teacher' },

  // ББГЗЗАН
  { id: 40, name: 'Н. Сугарбаатар', role: 'Биеийн тамир', dept: 'ББГЗЗАН', category: 'teacher' },
  { id: 41, name: 'Г. Мөнхтуяа', role: 'Биеийн тамир', dept: 'ББГЗЗАН', category: 'teacher' },
  { id: 42, name: 'О. Мягмаржав', role: 'Биеийн тамир', dept: 'ББГЗЗАН', category: 'teacher' },

  { id: 43, name: 'Х. Хатанмөнх', role: 'Дуу хөгжим', dept: 'ББГЗЗАН', category: 'teacher' },
  { id: 44, name: 'М. Батзориг', role: 'Дуу хөгжим', dept: 'ББГЗЗАН', category: 'teacher' },

  { id: 45, name: 'Б. Болор-Эрдэнэ', role: 'Дизайн технологи', dept: 'ББГЗЗАН', category: 'teacher' },
  { id: 46, name: 'Ө. Улсбаяр', role: 'Дизайн технологи', dept: 'ББГЗЗАН', category: 'teacher' },
  { id: 47, name: 'Г. Чулуунчимэг', role: 'Дизайн технологи', dept: 'ББГЗЗАН', category: 'teacher' },
  { id: 48, name: 'Э. Сувд-Эрдэнэ', role: 'Дүрслэх урлаг, технологи', dept: 'ББГЗЗАН', category: 'teacher' },

  // Бага ангийн багш нар
  { id: 49, name: 'Ө. Өлзийсайхан', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 50, name: 'Т. Маам', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 51, name: 'Ч. Номин-Эрдэнэ', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 52, name: 'М. Нарантуяа', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 53, name: 'Г. Хандсүрэн', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 54, name: 'Б. Энхмэнд', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 55, name: 'Ц. Нандин-Эрдэнэ', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 56, name: 'М. Ням-Өлзий', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 57, name: 'Б. Дашдулам', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
 { id: 58, name: 'Т. Ариунсувд', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 59, name: 'Э. Номин-Эрдэнэ', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 60, name: 'С. Сарангэрэл', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 61, name: 'О. Шинэсувд', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },
  { id: 62, name: 'Н. Булган', role: 'Бага ангийн багш', dept: 'Бага анги', category: 'teacher' },

  // Захиргаа, аж ахуйн ажилчид
  { id: 63, name: 'Э. Бат-Оргил', role: 'Сантехникч', dept: 'Аж ахуй', category: 'admin' },
  { id: 64, name: 'С. Батсайхан', role: 'Цахилгаанчин', dept: 'Аж ахуй', category: 'admin' },
  { id: 65, name: 'Г. Амартуяа', role: 'Туслах тогооч', dept: 'Аж ахуй', category: 'admin' },
  { id: 66, name: 'Өнөрбаяр', role: 'Бэлтгэгч', dept: 'Аж ахуй', category: 'admin' },
  { id: 67, name: 'М. Отгонжаргал', role: 'Угаагч', dept: 'Аж ахуй', category: 'admin' },
  { id: 68, name: 'У. Наранбаатар', role: 'Жижүүр', dept: 'Аж ахуй', category: 'admin' },
  { id: 69, name: 'Ж. Баттөгс', role: 'Жижүүр', dept: 'Аж ахуй', category: 'admin' },
  { id: 70, name: 'Ц. Батбилэг', role: 'Жижүүр', dept: 'Аж ахуй', category: 'admin' },
  { id: 71, name: 'Ш. Мөнхбат', role: 'Жижүүр', dept: 'Аж ахуй', category: 'admin' },
   { id: 72, name: 'С. Ганзам', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' }, 
   { id: 73, name: 'Б. Загдсүрэн', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' },
{ id: 74, name: 'Б. Батчимэг', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' },
 { id: 75, name: 'Г. Цогзолмаа', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' },
 { id: 76, name: 'Б. Наранцэцэг', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' }, 
 { id: 77, name: 'М. Гантогоо', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' },
 { id: 78, name: 'Б. Мөнхсувд', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' },
 { id: 79, name: 'Т. Түмэнжаргал', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' },
 { id: 80, name: 'Э. Балжинням', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' },
 { id: 81, name: 'Ц. Цэрэнлхам', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' },
 { id: 82, name: 'Л. Нямсүрэн', role: 'Үйлчлэгч', dept: 'Аж ахуй', category: 'admin' },]

const categoryLabels = {
  management: 'Удирдах алба',
  teacher: 'Багш нар',
  admin: 'Захиргаа & Аж ахуй',
}

const categoryColors: Record<string, string> = {
  management: '#7850ff',
  teacher: '#00c8b4',
  admin: '#ffb700',
}

const initials = (name: string) => {
  const parts = name.split(' ')
  return parts.map(p => p[0]).join('').toUpperCase().slice(0, 2)
}

export default function TeachersPage() {
  const [active, setActive] = useState<'all' | 'management' | 'teacher' | 'admin'>('all')
  const [search, setSearch] = useState('')

  const filtered = staffData.filter(s => {
    const matchCat = active === 'all' || s.category === active
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.role.toLowerCase().includes(search.toLowerCase()) || s.dept.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  const tabs: { key: 'all' | 'management' | 'teacher' | 'admin'; label: string; count: number }[] = [
    { key: 'all', label: 'Бүгд', count: staffData.length },
    { key: 'management', label: 'Удирдлага', count: staffData.filter(s => s.category === 'management').length },
    { key: 'teacher', label: 'Багш нар', count: staffData.filter(s => s.category === 'teacher').length },
    { key: 'admin', label: 'Захиргаа & АА', count: staffData.filter(s => s.category === 'admin').length },
  ]

  return (
    <section style={{ position: 'relative', zIndex: 1, maxWidth: 1200, margin: '0 auto', padding: '60px 32px 80px' }}>
      {/* Header */}
      <div style={{ marginBottom: 40 }}>
        <div style={{ fontSize: 11, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#b49eff', fontWeight: 500, marginBottom: 12 }}>
          Манай баг
        </div>
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: 14 }}>
          Бидний хамт олон
        </h1>
        <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', maxWidth: 540, lineHeight: 1.7 }}>
          Сайншанд хотын 6-р сургуулийн удирдах албаны ажилчид, багш нар болон захиргаа аж ахуйн ажилчид — нийт {staffData.length} хүний хамт олон.
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 40, flexWrap: 'wrap' }}>
        {tabs.filter(t => t.key !== 'all').map(t => (
          <div key={t.key} style={{ background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.13)', borderRadius: 12, padding: '16px 24px', minWidth: 140 }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: categoryColors[t.key] }}>{t.count}</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.55)', marginTop: 2 }}>{t.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 24, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 8 }}>
          {tabs.map(t => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              style={{
                padding: '8px 16px', borderRadius: 10, fontSize: 13, cursor: 'pointer',
                background: active === t.key ? '#7850ff' : 'rgba(255,255,255,0.06)',
                border: active === t.key ? 'none' : '0.5px solid rgba(255,255,255,0.15)',
                color: active === t.key ? '#fff' : 'rgba(255,255,255,0.7)',
                fontWeight: active === t.key ? 500 : 400,
                transition: 'all 0.2s',
              }}
            >
              {t.label} <span style={{ opacity: 0.7 }}>({t.count})</span>
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="Хайх..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            padding: '8px 16px', borderRadius: 10, fontSize: 13,
            background: 'rgba(255,255,255,0.06)', border: '0.5px solid rgba(255,255,255,0.15)',
            color: '#fff', outline: 'none', minWidth: 180,
          }}
        />
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14 }}>
        {filtered.map(s => (
          <div key={s.id} style={{
            background: 'rgba(255,255,255,0.055)', border: '0.5px solid rgba(255,255,255,0.11)',
            borderRadius: 14, padding: '20px 16px', textAlign: 'center',
            backdropFilter: 'blur(20px)',
            transition: 'border-color 0.2s',
          }}>
            <div style={{
              width: 52, height: 52, borderRadius: '50%',
              background: `linear-gradient(135deg, ${categoryColors[s.category]}55, ${categoryColors[s.category]}22)`,
              border: `1.5px solid ${categoryColors[s.category]}66`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 12px',
              fontSize: 16, fontWeight: 700, color: categoryColors[s.category],
            }}>
              {initials(s.name)}
            </div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, color: '#fff' }}>{s.name}</div>
            <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.5, marginBottom: 6 }}>{s.role}</div>
            <div style={{
              display: 'inline-block', fontSize: 10, padding: '2px 8px', borderRadius: 20,
              background: `${categoryColors[s.category]}22`, color: categoryColors[s.category],
              border: `0.5px solid ${categoryColors[s.category]}44`,
              letterSpacing: 0.3,
            }}>{s.dept}</div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'rgba(255,255,255,0.4)', fontSize: 15 }}>
          Хайлтын үр дүн олдсонгүй
        </div>
      )}
    </section>
  )
}
