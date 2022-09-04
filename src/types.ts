export type Light = {
  id: number;
  name: string;
  description: string;
  retired: boolean;
};

export type LightPayload = {
  name: string;
  description: string;
};

export interface LightsService {
  get(id: number): Light|null,
  all(): Light[],
  store(payload: LightPayload): Light,
  update(id: number, payload: Partial<Light>): Light|null,
}
