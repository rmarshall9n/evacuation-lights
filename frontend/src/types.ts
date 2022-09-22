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
  all(): Promise<Light[]>;
  get(id: number): Promise<Light>;
  store(payload: LightPayload): Promise<Light>;
  update(id: number, payload: LightPayload): Promise<Light>;
  retire(id: number): Promise<Light>;
}

export type Audit = {
  id: number;
  created_at: string;
  completed_at: string | null;
  records: LightRecord[];
};

export interface AuditsApi {
  get(id: number): Audit | null,
  all(): Audit[],
  store(): Audit,
  update(id: number, payload: Partial<Audit>): Audit | null,
}

export type LightRecord = {
  id: number;
  auditId: number;
  lightId: number;
  created_at: string;
  issue: boolean;
  note: string;
}

export type LightRecordPayload = {
  auditId: number;
  lightId: number;
  issue: boolean;
  note: string;
}

export interface LightRecordsApi {
  all(): LightRecord[],
  store(payload: LightRecordPayload): LightRecord,
  destroy(auditId: number, lightId: number): void,
}
