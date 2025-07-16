// theme.ts

export const tokens = {
  grey: {
    100: '#f2f4f7',
    200: '#e4e8ee',
    300: '#d7dde4',
    400: '#c9d1db',
    500: '#bcc6d2',
    600: '#969ea8',
    700: '#71777e',
    800: '#4b4f54',
    900: '#26282a',
  },
  primary: {
    // Deep ocean blue to teal gradient
    100: '#e6f7ff',
    200: '#bae7ff',
    300: '#91d5ff',
    400: '#69c0ff',
    500: '#40a9ff',
    600: '#1890ff',
    700: '#096dd9',
    800: '#0050b3',
    900: '#003a8c',
  },
  secondary: {
    // Warm coral/salmon
    100: '#fff2e8',
    200: '#ffd8bf',
    300: '#ffbb96',
    400: '#ff9c6e',
    500: '#ff7a45',
    600: '#fa541c',
    700: '#d4380d',
    800: '#ad2102',
    900: '#871400',
  },
  tertiary: {
    // Soft lavender purple
    500: '#9254de',
  },
  background: {
    light: '#1a1f2e',
    main: '#141824',
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ['Inter', 'sans-serif'].join(','),
    fontSize: 12,
    h1: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 32,
    },
    h2: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 24,
    },
    h3: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 20,
      fontWeight: 800,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 14,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      fontSize: 10,
      color: tokens.grey[700],
    },
  },
};
