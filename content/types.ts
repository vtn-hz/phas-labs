export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  bullets: string[];
};

export type CaseStudyBlock =
  | { type: "paragraph"; text: string }
  | { type: "stat"; label: string; value: string }
  | { type: "image"; src: string; alt: string };

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  body: CaseStudyBlock[];
};

export type NavLink = {
  href: string;
  label: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  /** E.164 digits only, no "+" or spaces (e.g. "5491122334455"). */
  whatsappNumber: string;
  email?: string;
  url: string;
};
