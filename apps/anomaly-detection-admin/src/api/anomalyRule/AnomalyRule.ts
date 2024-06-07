import { JsonValue } from "type-fest";

export type AnomalyRule = {
  condition: JsonValue;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
