export type PlanCycle = "mensal" | "semestral" | "anual";

export interface PlanPriceDetail {
  price: string;
  period: string;
  note: string;
  badge?: string | null;
}

export interface PlanItem {
  id: "start" | "destaque";
  name: string;
  type: string;
  coverage: string;
  badge?: string | null;
  prices: {
    mensal: PlanPriceDetail;
    semestral: PlanPriceDetail;
    anual: PlanPriceDetail;
  };
  optionalVideo: {
    mensal: string;
    semestral: string;
    anual: string;
  };
  features: string[];
}

export interface Supporter {
  id: string;
  name: string;
  logoUrl: string;
}

export interface ContactFormData {
  nome: string;
  empresa: string;
  whatsapp: string;
  email: string;
  segmento: string;
  plano: string;
  mensagem: string;
  origem: string;
}
