import type { Light } from "@/types";

export function makeLight(data?: Partial<Light>): Light
{
  return {
    id: 1,
    name: 'light name',
    description: 'light description',
    ...data
  }
}
