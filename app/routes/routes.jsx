import WidgetsIcon from "@mui/icons-material/Widgets";
import GroupIcon from "@mui/icons-material/Group";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import ReceiptIcon from "@mui/icons-material/Receipt";

export const ROUTES = [
  {
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <WidgetsIcon />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <GroupIcon />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <ProductionQuantityLimitsIcon />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <ReceiptIcon />,
      },
    ],
  },
];
