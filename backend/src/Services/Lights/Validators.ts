export function validateCreateLight(body: any): string[] {
  let errors: string[] = []

  if (typeof body.name !== 'string' || body.name.length === 0) {
    errors.push('A name is required')
  }

  if (typeof body.description !== 'string' || body.description.length === 0) {
    errors.push('A description is required')
  }

  return errors
}
