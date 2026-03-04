export interface TableData {
  headers: string[];
  rows: string[][];
}

export interface IrregularVerb {
  base: string;
  pastSimple: string;
  presentContinuous: string;
  pastContinuous: string;
  example: string;
}

export interface ListItem {
  label: string;
  example: string;
}

export interface Section {
  heading: string;
  content?: string;
  table?: TableData;
  irregularVerbs?: IrregularVerb[];
  list?: ListItem[];
  examples?: { q: string; a: string }[];
  examples_simple?: string[];
}

export interface Topic {
  id: string;
  icon: string;
  title: string;
  subtitle: string;
  color: string;
  route: string;
  sections: Section[];
}