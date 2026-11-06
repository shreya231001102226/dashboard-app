import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Chip,
} from "@mui/material";

function RecentOrders({ orders }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "success";

      case "Processing":
        return "info";

      case "Pending":
        return "warning";

      case "Cancelled":
        return "error";

      default:
        return "default";
    }
  };

  const recentOrders = [...orders]
    .sort((a, b) => b.date.localeCompare(a.date) ||
      b.id.localeCompare(a.id))
    .slice(0, 5);

  return (
    <Card className="chart-card">
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Recent Orders
        </Typography>

        {recentOrders.length === 0 ? (
          <Typography color="text.secondary">
            No orders available
          </Typography>
        ) : (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Order ID</TableCell>
                  <TableCell>Customer</TableCell>
                  <TableCell>Product</TableCell>
                  <TableCell>Amount</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>Status</TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {recentOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell>{order.id}</TableCell>

                    <TableCell>{order.customer}</TableCell>

                    <TableCell>{order.product}</TableCell>

                    <TableCell>
                      ₹{order.amount.toLocaleString("en-IN")}
                    </TableCell>

                    <TableCell>{order.date}</TableCell>

                    <TableCell>
                      <Chip
                        label={order.status}
                        color={getStatusColor(order.status)}
                        size="small"
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </CardContent>
    </Card>
  );
}

export default RecentOrders;