'use client'

import React from 'react'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const page = () => {
  return (


    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <>



      Home page
    </>

    </ThemeProvider>
  )
}

export default page
