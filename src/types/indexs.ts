// Experience Types
export interface ExperienceItem {
  id: number;
  role: string;
  time: string;
  company: string;
  type?: string; // Optional field for employment type
  skills: string[]; // Optional field for skills used
  description: string[];
  website?: string; // Optional field if you add URLs later
}

// Education Types
export interface EducationItem {
  institution: string;
  time: string;
  degree?: string; // Optional field if you want to add degree info
  field?: string; // Optional field for field of study
}

// Contact Types
export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  birthdate: string;
  linkedin?: string; // Optional social profiles
  github?: string;
  website?: string;
}

// Skills Types
export interface SkillsCategory {
  [category: string]: string[];
}

// Main Data Type
export interface PortfolioData {
  experience: ExperienceItem[];
  skills: SkillsCategory;
  education: EducationItem[];
  about: string;
  contact: ContactInfo;
}
