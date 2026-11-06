import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";
import PeopleIcon from "@mui/icons-material/People";

function StatCards({ orders }) {
  const completedOrders = orders.filter(
    (order) => order.status === "Completed"
  );

  const revenue = completedOrders.reduce(
    (sum, order) => sum + order.amount,
    0
  );

  const sales = completedOrders.length;

  const totalOrders = orders.length;

  const customers = new Set(
    orders.map((order) => order.customer)
  ).size;

  const stats = [
    {
      title: "Revenue",
      value: `₹${revenue.toLocaleString("en-IN")}`,
      icon: <AttachMoneyIcon />,
      color: "#2563eb",
    },
    {
      title: "Sales",
      value: sales,
      icon: <ShoppingCartIcon />,
      color: "#16a34a",
    },
    {
      title: "Orders",
      value: totalOrders,
      icon: <InventoryIcon />,
      color: "#ea580c",
    },
    {
      title: "Customers",
      value: customers,
      icon: <PeopleIcon />,
      color: "#9333ea",
    },
  ];

  return (
    <Grid container spacing={2}>
      {stats.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.title}>
          <Card className="stat-card">
            <CardContent>
              <Box className="stat-content">
                <Box>
                  <Typography color="text.secondary">
                    {item.title}
                  </Typography>

                  <Typography variant="h5" fontWeight="bold">
                    {item.value}
                  </Typography>
                </Box>

                <Box
                  className="stat-icon"
                  sx={{
                    backgroundColor: item.color,
                  }}
                >
                  {item.icon}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default StatCards;

// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
// } from "@mui/material";

// import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import InventoryIcon from "@mui/icons-material/Inventory";
// import PeopleIcon from "@mui/icons-material/People";

// function StatCards({ orders }) {
//   const completedOrders = orders.filter(
//     (order) => order.status === "Completed"
//   );

//   const revenue = completedOrders.reduce(
//     (sum, order) => sum + order.amount,
//     0
//   );

//   const sales = completedOrders.length;
//   const totalOrders = orders.length;

//   const customers = new Set(
//     orders.map((order) => order.customer)
//   ).size;

//   const stats = [
//     {
//       title: "Revenue",
//       value: `₹${revenue.toLocaleString("en-IN")}`,
//       icon: <AttachMoneyIcon />,
//       color: "#2563eb",
//     },
//     {
//       title: "Sales",
//       value: sales,
//       icon: <ShoppingCartIcon />,
//       color: "#16a34a",
//     },
//     {
//       title: "Orders",
//       value: totalOrders,
//       icon: <InventoryIcon />,
//       color: "#ea580c",
//     },
//     {
//       title: "Customers",
//       value: customers,
//       icon: <PeopleIcon />,
//       color: "#9333ea",
//     },
//   ];

//   return (
//     <Box
//       sx={{
//         display: "grid",
//         gridTemplateColumns: {
//           xs: "1fr",
//           sm: "repeat(2, 1fr)",
//           md: "repeat(4, 1fr)",
//         },
//         gap: 2,
//       }}
//     >
//       {stats.map((item) => (
//         <Card className="stat-card" key={item.title}>
//           <CardContent>
//             <Box className="stat-content">
//               <Box>
//                 <Typography color="text.secondary">
//                   {item.title}
//                 </Typography>

//                 <Typography variant="h5" fontWeight="bold">
//                   {item.value}
//                 </Typography>
//               </Box>

//               <Box
//                 className="stat-icon"
//                 sx={{ backgroundColor: item.color }}
//               >
//                 {item.icon}
//               </Box>
//             </Box>
//           </CardContent>
//         </Card>
//       ))}
//     </Box>
//   );
// }

// export default StatCards;