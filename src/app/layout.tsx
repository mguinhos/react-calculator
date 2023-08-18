"use client";

import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './themes/themes';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{height: '100%'}}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <body style={{height: '100%'}}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  )
}
