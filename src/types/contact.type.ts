import { Address } from './address.type';
import { FullName } from './full-name.type';

export type ContactType = {
  Name: FullName;
  Address: Address;
  Email: string;
  EmailType: string;
  Phone: string;
  PhoneType: string;
  Preferred: string;
  Subject: string;
  Message: string;
};

export const blankContact: ContactType = {
  Name: {
    Salutation: '',
    First: '',
    Middle: '',
    Last: '',
    Suffix: '',
  },
  Address: {
    Address: '',
    Suite: '',
    City: '',
    State: '',
    Zip: '',
  },
  Email: '',
  EmailType: 'Work',
  Phone: '',
  PhoneType: 'Work',
  Preferred: 'Email',
  Subject: '',
  Message: '',
};
