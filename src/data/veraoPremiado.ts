export const TERMS_VERSION = "verao-premiado-2027-v2";
export const PROPOSAL_URL = "/docs/proposta-comercial-verao-premiado-2027.pdf";

export type CampaignAsset = {
  path: string;
  name: string;
  size: number;
  mime_type: string;
  kind: "logo" | "motion";
};

export type CampaignScreen = {
  id: string;
  name: string;
  address: string;
  description: string | null;
  photo_url: string | null;
  capacity: number | null;
  selected_count: number;
  available: boolean;
};

export type PaymentOption = "avista" | "parcelado";
export type ContributionType = "produto" | "servico" | "vale_compra";

export type VeraoFormData = {
  businessName: string;
  cnpj: string;
  segment: string;
  businessInstagram: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  responsibleName: string;
  cpf: string;
  radioBriefing: string;
  motionBriefing: string;
  sameBriefing: boolean;
  paymentOption: PaymentOption | "";
  contributionType: ContributionType | "";
  contributionDescription: string;
  contributionConditions: string;
  contributionNotes: string;
};

export const initialVeraoForm: VeraoFormData = {
  businessName: "", cnpj: "", segment: "", businessInstagram: "", cep: "", street: "",
  number: "", complement: "", neighborhood: "", city: "",
  state: "", responsibleName: "", cpf: "", radioBriefing: "",
  motionBriefing: "", sameBriefing: false, paymentOption: "",
  contributionType: "", contributionDescription: "",
  contributionConditions: "", contributionNotes: "",
};

export const participationBenefits = [
  "1.000 cupons promocionais",
  "Cartaz personalizado com a logomarca do estabelecimento",
  "Identificação oficial de participante",
  "Divulgação na Rádio Braba FM 104,9",
  "Escolha de uma entre cinco telas da VM Mídias",
  "Produção de um vídeo Motion de 20 segundos",
  "Exibição diária durante o período contratado",
  "Participação na premiação coletiva",
];

export const requiredDeclarations = [
  "Declaro que sou responsável pelo estabelecimento informado ou possuo autorização para representá-lo.",
  "Declaro que li e estou de acordo com as condições comerciais apresentadas na proposta do Verão Premiado 2027.",
  "Estou ciente do investimento selecionado e de que o vale-compras é opcional.",
  "Declaro possuir autorização para disponibilizar os materiais e logomarcas enviados para utilização na campanha.",
  "Declaro que li o aviso de privacidade referente ao tratamento dos meus dados pessoais.",
];

export function digits(value: string) {
  return value.replace(/\D/g, "");
}

export function maskCpf(value: string) {
  const d = digits(value).slice(0, 11);
  return d.replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

export function maskCnpj(value: string) {
  const d = digits(value).slice(0, 14);
  return d.replace(/(\d{2})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1.$2").replace(/(\d{3})(\d)/, "$1/$2").replace(/(\d{4})(\d{1,2})$/, "$1-$2");
}

export function maskPhone(value: string) {
  const d = digits(value).slice(0, 11);
  if (d.length <= 10) return d.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{4})(\d)/, "$1-$2");
  return d.replace(/(\d{2})(\d)/, "($1) $2").replace(/(\d{5})(\d)/, "$1-$2");
}

export function maskCep(value: string) {
  return digits(value).slice(0, 8).replace(/(\d{5})(\d)/, "$1-$2");
}

export function isValidCpf(value: string) {
  const cpf = digits(value);
  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) return false;
  const calc = (size: number) => {
    let sum = 0;
    for (let i = 0; i < size; i += 1) sum += Number(cpf[i]) * (size + 1 - i);
    const mod = (sum * 10) % 11;
    return mod === 10 ? 0 : mod;
  };
  return calc(9) === Number(cpf[9]) && calc(10) === Number(cpf[10]);
}

export function isValidCnpj(value: string) {
  const cnpj = digits(value);
  if (!cnpj) return true;
  if (cnpj.length !== 14 || /^(\d)\1+$/.test(cnpj)) return false;
  const digit = (base: string) => {
    let factor = base.length - 7;
    const total = [...base].reduce((sum, n) => {
      const result = sum + Number(n) * factor;
      factor = factor === 2 ? 9 : factor - 1;
      return result;
    }, 0);
    const remainder = total % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };
  return digit(cnpj.slice(0, 12)) === Number(cnpj[12]) && digit(cnpj.slice(0, 13)) === Number(cnpj[13]);
}

export function maskCpfReview(value: string) {
  const d = digits(value);
  return d.length === 11 ? `***.${d.slice(3, 6)}.${d.slice(6, 9)}-**` : "Protegido";
}
