export function dateNow(): string {
  return (new Date()).toISOString().replace('T', ' ').replace('Z', '')
}
