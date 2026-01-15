// Equifax Brand Colors
// Primary palette derived from Equifax brand guidelines

export const colors = {
  // Primary Brand Colors
  primary: {
    25: '#F5F8FF',
    50: '#EFF4FF',
    100: '#D1E0FF',
    200: '#B2CCFF',
    300: '#84ADFF',
    400: '#528BFF',
    500: '#2970FF',
    600: '#1849A9', // Equifax Primary Blue
    700: '#155EEF',
    800: '#0C2B5E', // Equifax Dark Blue
    900: '#0A1D3D',
    950: '#051024',
  },

  // Secondary - Accent Red
  secondary: {
    25: '#FFF5F6',
    50: '#FEF3F2',
    100: '#FEE4E2',
    200: '#FECDCA',
    300: '#FDA29B',
    400: '#F97066',
    500: '#F04438',
    600: '#E31837', // Equifax Accent Red
    700: '#B42318',
    800: '#912018',
    900: '#7A271A',
    950: '#55160C',
  },

  // Neutral Gray Scale
  gray: {
    25: '#FCFCFD',
    50: '#F9FAFB',
    100: '#F2F4F7',
    200: '#EAECF0',
    300: '#D0D5DD',
    400: '#98A2B3',
    500: '#667085',
    600: '#475467',
    700: '#344054',
    800: '#182230',
    900: '#101828',
    950: '#0C111D',
  },

  // Success
  success: {
    25: '#F6FEF9',
    50: '#ECFDF3',
    100: '#DCFAE6',
    200: '#ABEFC6',
    300: '#75E0A7',
    400: '#47CD89',
    500: '#17B26A',
    600: '#079455',
    700: '#067647',
    800: '#085D3A',
    900: '#074D31',
    950: '#053321',
  },

  // Warning
  warning: {
    25: '#FFFCF5',
    50: '#FFFAEB',
    100: '#FEF0C7',
    200: '#FEDF89',
    300: '#FEC84B',
    400: '#FDB022',
    500: '#F79009',
    600: '#DC6803',
    700: '#B54708',
    800: '#93370D',
    900: '#7A2E0E',
    950: '#4E1D09',
  },

  // Error
  error: {
    25: '#FFFBFA',
    50: '#FEF3F2',
    100: '#FEE4E2',
    200: '#FECDCA',
    300: '#FDA29B',
    400: '#F97066',
    500: '#F04438',
    600: '#D92D20',
    700: '#B42318',
    800: '#912018',
    900: '#7A271A',
    950: '#55160C',
  },

  // Base
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

// Semantic color mappings
export const semanticColors = {
  // Brand
  brand: colors.primary[600],
  brandDark: colors.primary[800],
  brandLight: colors.primary[100],

  // Text
  textPrimary: colors.gray[900],
  textSecondary: colors.gray[600],
  textTertiary: colors.gray[500],
  textDisabled: colors.gray[400],
  textInverse: colors.white,

  // Backgrounds
  bgPrimary: colors.white,
  bgSecondary: colors.gray[50],
  bgTertiary: colors.gray[100],
  bgBrand: colors.primary[600],
  bgBrandSubtle: colors.primary[50],

  // Borders
  borderPrimary: colors.gray[300],
  borderSecondary: colors.gray[200],
  borderBrand: colors.primary[600],

  // States
  stateSuccess: colors.success[600],
  stateWarning: colors.warning[600],
  stateError: colors.error[600],

  // Interactive
  interactiveDefault: colors.primary[600],
  interactiveHover: colors.primary[700],
  interactiveActive: colors.primary[800],
  interactiveDisabled: colors.gray[300],
} as const;

export type Colors = typeof colors;
export type SemanticColors = typeof semanticColors;
