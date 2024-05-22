"use client";
import { Box, Button, Divider, ThemeProvider,  } from "@mui/material";
import React from "react";
import OutlinedCards from "../ui/dashboard/cards/outlinedCards";
import theme from "../ui/theme/custom-theme";

const DashboardPage = () => {
  return (
    <>

    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" , gap:3, alignItems:'center', justifyContent:'space-around' }}>
        <OutlinedCards />
        <OutlinedCards />
        <OutlinedCards />
        </Box>

        <Divider  sx={{px:3, my:3}}/>

        <Button variant="outlined" size="extraSmall">Hello</Button>
       
        </ThemeProvider>
    </> 
  );
};

export default DashboardPage;
