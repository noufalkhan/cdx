import { ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuLink = ({ item }) => {
  const pathname = usePathname();
  const theme = useTheme();
  return (
    <Link href={item.path} style={{ textDecoration: "none" }}>
      <ListItemButton 
        selected={pathname === item.path}
        sx={{
          width: 200,
          display: "flex",
          justifyContent: "space-between",
          color: theme.palette.text.primary, // Set color to primary text color based on the theme
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
      </ListItemButton>
    </Link>
  );
};

export default MenuLink;
