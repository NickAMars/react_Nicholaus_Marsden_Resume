import { ThemeProvider, createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    quaternary: Palette['primary'];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    quaternary?: PaletteOptions['primary'];
  }
}
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    tertiary: true;
    quaternary: true;
  }
}

export const theme = createTheme({
    palette: {
        primary: {
          main: '#2563eb',
        },
        secondary: {
          main: '#FFF',
        },
        tertiary: {
          main: '#1e40af',
        },
    },
})
