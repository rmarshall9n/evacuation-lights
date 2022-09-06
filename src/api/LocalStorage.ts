export function retrieve<Type>(storeId: string): Type[]
{
  let records = localStorage.getItem(storeId)

  if (records === null) {
    return []
  }

  return JSON.parse(records)
}

export function persist<Type>(storeId: string, data: Type[]): void
{
  localStorage.setItem(storeId, JSON.stringify(data))
}
