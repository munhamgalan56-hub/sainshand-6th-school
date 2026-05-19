# Сайншанд 6-р Сургуулийн вебсайт

Next.js 14 + Tailwind CSS + TypeScript ашиглан хийсэн.

## Эхлүүлэх

```bash
npm install
npm run dev
```

Браузерт нээх: [http://localhost:3000](http://localhost:3000)

## Бүтэц

```
Sainshand-6th-School/
├── app/                  ← Next.js App Router хуудсууд
│   ├── layout.tsx        ← Ерөнхий layout
│   ├── page.tsx          ← Нүүр хуудас
│   ├── globals.css       ← Ерөнхий стиль
│   ├── about/            ← Сургуулийн тухай
│   ├── news/             ← Мэдээ мэдээлэл
│   ├── teachers/         ← Багш нар
│   └── contact/          ← Холбоо барих
├── components/
│   ├── layout/           ← Navbar, Footer
│   ├── sections/         ← Hero, Features, Stats...
│   └── ui/               ← Button, Card...
├── lib/                  ← Utility functions
├── public/               ← Зураг, icon файлууд
├── types/                ← TypeScript types
└── ...config files
```
