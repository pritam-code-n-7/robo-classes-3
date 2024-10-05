export interface cartTypes {
  id?:number;
  price?: number;
  course?: string;
  src?: { src: string }[] ;
  cardTitle?: string;
  includes?: string;
  prevPayment?: string;
  installmentNow?: number;
  prevInstallment?: string;
}
