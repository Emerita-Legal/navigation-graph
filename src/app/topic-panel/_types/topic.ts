export interface Topic {
  id: number;
  label: string;
  title: string;
  description: string;
  subtitle?: string;
  Lawyers?: Array<Lawyer>;
  Courts?: Array<Court>;
  Documents?: Array<Document>;
  Publications?: Array<Publication>;
  childs?: Array<Topic>;
  isCentral: boolean;
  image?: string;
}

interface Lawyer {
  id: number;
}
interface Court {
  id: number;
}
interface Document {
  id: number;
}
interface Publication {
    id: number,
    title: string,
    url: string,
    image: string,
    snippet: string
}
