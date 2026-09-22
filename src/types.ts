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

export interface NetworkCategory {
  id: string;
  name: string;
  locationScope: string;
  description: string;
  highlight: string;
  iconName: string;
  imageMockup: string;
}

export interface RealPoint {
  id: string;
  name: string;
  category: string;
  neighborhood: string;
  description: string;
  photoUrl?: string;
}

export interface ClientCase {
  id: string;
  companyName: string;
  segment: string;
  campaign: string;
  logoUrl?: string;
  installedPhotoUrl?: string;
  testimonial?: string;
  results?: string;
  partnershipDuration?: string;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  sublabel: string;
  iconName: string;
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
