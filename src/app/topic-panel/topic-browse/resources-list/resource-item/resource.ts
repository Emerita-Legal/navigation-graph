export enum ResourceTypes {
  Lawyer,
  Court,
  Law,
  Sentence,
  Article,
  Template,
}

export interface Resource {
  image: string;
  title: string;
  subtitle: string;
  type: ResourceTypes;
  country: string;
  href: string;
}
