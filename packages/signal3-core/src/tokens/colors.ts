// Equifax Brand Colors
// Official Equifax brand color palette

export const colors = {
  // Primary - Equifax Red (#9e1b32)
  primary: {
    25: '#FEF5F6',
    50: '#FDF2F4',
    100: '#FCE4E8',
    200: '#F9C8D0',
    300: '#F4A1AE',
    400: '#EC7085',
    500: '#D84560',
    600: '#9E1B32', // Equifax Red - Primary Brand Color
    700: '#8A1729',
    800: '#6E1221',
    900: '#520D18',
    950: '#3A0911',
  },

  // Blue - Equifax Brand Blue (#007298)
  blue: {
    25: '#F0FAFD',
    50: '#E5F6FB',
    100: '#C7EDF7',
    200: '#94DCEF',
    300: '#5CC5E3',
    400: '#2AADD4',
    500: '#0890B8',
    600: '#007298', // Equifax Blue
    700: '#004D66', // Equifax Blue Shadow
    800: '#003D52',
    900: '#002D3D',
    950: '#001E29',
  },

  // Green - Equifax Brand Green (#45842a)
  green: {
    25: '#F5FBF3',
    50: '#EDF8E9',
    100: '#D9F0D1',
    200: '#B5E1A6',
    300: '#8BCC76',
    400: '#64B34D',
    500: '#4A993A',
    600: '#45842A', // Equifax Green
    700: '#294D19', // Equifax Green Shadow
    800: '#223F15',
    900: '#1A3010',
    950: '#12210B',
  },

  // Orange - Equifax Brand Orange (#e77204)
  orange: {
    25: '#FFFAF5',
    50: '#FFF5EB',
    100: '#FFEBD4',
    200: '#FFD4A8',
    300: '#FFB871',
    400: '#FF983A',
    500: '#F5820F',
    600: '#E77204', // Equifax Orange
    700: '#994A00', // Equifax Orange Shadow
    800: '#7A3B00',
    900: '#5C2C00',
    950: '#3D1D00',
  },

  // Yellow - Equifax Brand Yellow (#f1c319)
  yellow: {
    25: '#FFFDF5',
    50: '#FFFBEB',
    100: '#FFF5CC',
    200: '#FFEC99',
    300: '#FFDF5C',
    400: '#F7D033',
    500: '#F1C319', // Equifax Yellow
    600: '#98700C', // Equifax Yellow Shadow
    700: '#7A5909',
    800: '#5C4307',
    900: '#3D2D05',
    950: '#291E03',
  },

  // Purple - Equifax Brand Purple (#652f6c)
  purple: {
    25: '#FAF5FB',
    50: '#F6EDF7',
    100: '#EDDAEF',
    200: '#DBB5DF',
    300: '#C48BCA',
    400: '#A95EB0',
    500: '#873A90',
    600: '#652F6C', // Equifax Purple
    700: '#431F47', // Equifax Purple Shadow
    800: '#36193A',
    900: '#28132B',
    950: '#1B0D1D',
  },

  // Neutral Gray Scale - Based on Equifax Gray (#5b6771)
  gray: {
    25: '#FCFCFD',
    50: '#F9FAFB',
    100: '#F2F4F6',
    200: '#E7E7E7', // Equifax Light Gray
    300: '#D0D4D8',
    400: '#A3AAAD', // Equifax Medium Gray
    500: '#5B6771', // Equifax Gray
    600: '#4A545D',
    700: '#3A424A',
    800: '#2A3037',
    900: '#1A1E24',
    950: '#0D0F11',
  },

  // Error/Destructive - Uses Equifax Red
  error: {
    25: '#FEF5F6',
    50: '#FDF2F4',
    100: '#FCE4E8',
    200: '#F9C8D0',
    300: '#F4A1AE',
    400: '#EC7085',
    500: '#D84560',
    600: '#9E1B32',
    700: '#8A1729',
    800: '#6E1221',
    900: '#520D18',
    950: '#3A0911',
  },

  // Success - Uses Equifax Green
  success: {
    25: '#F5FBF3',
    50: '#EDF8E9',
    100: '#D9F0D1',
    200: '#B5E1A6',
    300: '#8BCC76',
    400: '#64B34D',
    500: '#4A993A',
    600: '#45842A',
    700: '#294D19',
    800: '#223F15',
    900: '#1A3010',
    950: '#12210B',
  },

  // Warning - Uses Equifax Orange
  warning: {
    25: '#FFFAF5',
    50: '#FFF5EB',
    100: '#FFEBD4',
    200: '#FFD4A8',
    300: '#FFB871',
    400: '#FF983A',
    500: '#F5820F',
    600: '#E77204',
    700: '#994A00',
    800: '#7A3B00',
    900: '#5C2C00',
    950: '#3D1D00',
  },

  // Base
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'transparent',
} as const;

// Semantic color mappings
export const semanticColors = {
  // Brand - Equifax Red
  brand: colors.primary[600], // #9E1B32
  brandDark: colors.primary[700],
  brandLight: colors.primary[100],

  // Brand Accent - Equifax Blue
  accent: colors.blue[600], // #007298
  accentDark: colors.blue[700],
  accentLight: colors.blue[100],

  // Text
  textPrimary: colors.gray[900],
  textSecondary: colors.gray[500], // Equifax Gray
  textTertiary: colors.gray[400],
  textDisabled: colors.gray[300],
  textInverse: colors.white,

  // Backgrounds
  bgPrimary: colors.white,
  bgSecondary: colors.gray[50],
  bgTertiary: colors.gray[100],
  bgBrand: colors.primary[600],
  bgBrandSubtle: colors.primary[50],
  bgAccent: colors.blue[600],
  bgAccentSubtle: colors.blue[50],

  // Borders
  borderPrimary: colors.gray[300],
  borderSecondary: colors.gray[200],
  borderBrand: colors.primary[600],

  // States
  stateSuccess: colors.success[600], // Equifax Green
  stateWarning: colors.warning[600], // Equifax Orange
  stateError: colors.error[600], // Equifax Red

  // Interactive - Using Equifax Red as primary interactive color
  interactiveDefault: colors.primary[600],
  interactiveHover: colors.primary[700],
  interactiveActive: colors.primary[800],
  interactiveDisabled: colors.gray[300],
} as const;

export type Colors = typeof colors;
export type SemanticColors = typeof semanticColors;
