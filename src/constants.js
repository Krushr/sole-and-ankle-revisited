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
