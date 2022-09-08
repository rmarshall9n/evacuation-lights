export function ucfirst(string: string): string
{
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(date: string): string
{
  const parts = date.split('T')[0].split('-')

  if (parts.length !== 3) {
    return ''
  }

  return parts[2] + '/' + parts[1] + '/' + parts[0]
}
