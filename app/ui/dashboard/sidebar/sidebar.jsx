"use client";
import { Drawer } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { DrawerHeader, drawerWidth } from "../../constants/app-constants";
import { ROUTES } from "@/app/routes/routes";
import React from "react";
import MenuLink from "./menulink/menulink";

const Sidebar = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ listStyle: "none" }}>
          {ROUTES.map((route) => (
            <ListItem
              sx={{ padding: "20px", display: "flex", flexDirection: "column"}}
            >
              {route.list.map((link) => (
                <MenuLink key={link.title} item={link} />
              ))}
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
