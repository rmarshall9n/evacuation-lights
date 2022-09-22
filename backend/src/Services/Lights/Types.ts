export type Light = {
    id: number;
    name: string;
    description: string;
    retired_at: string | null;
}

export type LightInput = {
    name: string;
    description: string;
}
