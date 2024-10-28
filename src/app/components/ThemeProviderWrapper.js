"use client";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3496d3',
      contrastText: '#fff',
    },
    secondary: {
      main: '#3496d3',
      contrastText: '#3496d3',
    },
    background: {
      default: '#3496d3', // Ensures global background is blue
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
  shadows: Array(25).fill('0px 4px 15px rgba(255, 255, 255, 0.1)'),
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#fff',
          color: '#3496d3',
          '&:hover': {
            backgroundColor: '#f0f0f0',
          },
        },
      },
    },
  },
});

export default function ThemeProviderWrapper({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline respects background color set in theme */}
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}