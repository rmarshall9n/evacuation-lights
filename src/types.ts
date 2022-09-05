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

export interface LightsApi {
  get(id: number): Light|null,
  all(): Light[],
  store(payload: LightPayload): Light,
  update(id: number, payload: Partial<Light>): Light|null,
}

export type Audit = {
  id: number;
  created_at: string;
  completed_at: string|null;
  lights: Light[];
};

export interface AuditsApi {
  get(id: number): Audit|null,
  all(): Audit[],
  store(): Audit,
  update(id: number, payload: Partial<Audit>): Audit|null,
}

