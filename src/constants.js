export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phoneMin: 600 / 16, // 600px / 16px = 37.5rem
  tabletMin: 950 / 16, // 950px / 16px = 59.375rem
  laptopMin: 1300 / 16, // 1300px / 16px = 81.25rem
};

export const QUERIES = {
  phoneAndUp: `(min-width: ${BREAKPOINTS.phoneMin}rem)`,
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin}rem)`,
};
