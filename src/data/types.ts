export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  summary: string;
  icon: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  items: string[];
  intro: string;
  capabilities: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface GrowthGoal {
  period: string;
  title: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  focus: string;
  linkedin?: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  category: string;
  readingTime: string;
  author: string;
  content: string[];
  takeaways: string[];
  faqs: FaqItem[];
}

export interface LocationItem {
  slug: string;
  name: string;
  type: string;
  region: string;
  country: string;
  description: string;
  metaDescription: string;
  services: readonly string[];
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  coordinates: { latitude: number; longitude: number };
  address: string;
  phone: string;
  email: string;
}

export interface GlossaryTerm {
  term: string;
  definition: string;
  category: string;
}