export interface Topic {
  id: number;
  name: string;
  type: string;
  title: string;
  description: string;
  subtitle?: string;
  profiles?: Array<Resource>;
  courts?: Array<Resource>;
  laws?: Array<Resource>;
  related?: Array<Resource>;
  publications?: Array<Resource>;
  childs?: Array<Topic>;
  isCentral: boolean;
  image?: string;
}

export interface Resource {
  id?: number;
  url?: string;
  snippet?: string;
  image: string;
  title: string;
  subtitle?: string;
  type?: ResourceTypes;
  country?: string;
}

export enum ResourceTypes {
  Lawyer,
  Court,
  Law,
  Sentence,
  Article,
  Template,
}
