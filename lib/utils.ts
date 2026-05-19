export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('mn-MN', {
    year: 'numeric', month: 'long', day: 'numeric'
  })
}
