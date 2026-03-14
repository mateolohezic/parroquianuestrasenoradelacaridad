export interface FormacionSection {
  id: string;
  title: string;
  content: string[];
  officialText?: string;
  subsections?: FormacionSubsection[];
}

export interface FormacionSubsection {
  id: string;
  title: string;
  content: string[];
  officialText?: string;
}
