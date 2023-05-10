export type ThemeType = {
  [key: string]: {
    one: string;
    two: string;
    three: string;
    four: string;
  };
};

// from https://colorhunt.co/
export const themes: ThemeType = {
  'Retro-Light': {
    one: '#F9E2AF',
    two: '#009FBD',
    three: '#210062',
    four: '#77037B',
  },
  'Retro-Dark': {
    one: '#243763',
    two: '#FF6E31',
    three: '#FFEBB7',
    four: '#AD8E70',
  },

  'Pastel-Light': {
    one: '#FDF4F5',
    two: '#E8A0BF',
    three: '#BA90C6',
    four: '#C0DBEA',
  },
  'Pastel-Dark': {
    one: '#B2A4FF',
    two: '#FFB4B4',
    three: '#FFDEB4',
    four: '#FDF7C3',
  },
  'Vintage-Light': {
    one: '#F9F5EB',
    two: '#E4DCCF',
    three: '#EA5455',
    four: '#002B5B',
  },
  'Vintage-Dark': {
    one: '#181D31',
    two: '#678983',
    three: '#E6DDC4',
    four: '#F0E9D2',
  },
  'Cold-Light': {
    one: '#F6F1F1',
    two: '#AFD3E2',
    three: '#19A7CE',
    four: '#146C94',
  },
  'Cold-Dark': {
    one: '#393E46',
    two: '#6D9886',
    three: '#F2E7D5',
    four: '#F7F7F7',
  },
  'Fall-Light': {
    one: '#FFF2CC',
    two: '#FFD966',
    three: '#F4B183',
    four: '#DFA67B',
  },
  'Fall-Dark': {
    one: '#1B1A17',
    two: '#F0A500',
    three: '#E45826',
    four: '#E6D5B8',
  },
};

export const themeNames = Object.keys(themes);
