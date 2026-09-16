import { Education } from './education';
import { Experience } from './experience';

export interface Profile {
  personalData: {
    name: string;
    email: string;
    phone: string;
    birthDate: Date;
    links: [];
  };
  skills: string[];
  experiences: Experience[];
  educations: Education[];
}
