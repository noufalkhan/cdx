"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import { Box } from "@mui/material";
import Navbar from "../ui/dashboard/navbar/navbar";
import { DrawerHeader } from "../ui/constants/app-constants";
import { Main } from "../ui/constants/app-constants";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";


const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  if (!mounted) {
    // Ensure that the server-rendered content matches the client-rendered content
    return null;
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        <Sidebar open={open} handleDrawerClose={handleDrawerClose} />
      </Box>
      <Box>
        <Navbar
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          toggleTheme={toggleTheme}
        />

        <Main open={open}>
          <DrawerHeader />
          
          {children}
         
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
