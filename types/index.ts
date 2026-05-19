export interface NavLink {
  href: string
  label: string
}

export interface NewsItem {
  id: number
  title: string
  category: string
  date: string
  image?: string
  excerpt: string
}

export interface Teacher {
  id: number
  name: string
  subject: string
  experience: number
  image?: string
}

export interface Stat {
  value: string
  label: string
  icon: string
}
