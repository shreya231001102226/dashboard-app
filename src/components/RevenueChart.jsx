import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function RevenueChart({ orders }) {
  const groupedData = orders.reduce((acc, order) => {
    if (order.status === "Cancelled") {
      return acc;
    }

    if (!acc[order.date]) {
      acc[order.date] = {
        date: order.date,
        revenue: 0,
        sales: 0,
      };
    }

    acc[order.date].revenue += order.amount;

    if (order.status === "Completed") {
      acc[order.date].sales += 1;
    }

    return acc;
  }, {});

  const chartData = Object.values(groupedData).sort(
    (a, b) => a.date.localeCompare(b.date)
  );

  return (
    <Card className="chart-card">
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Revenue / Sales Trend
        </Typography>

        {chartData.length === 0 ? (
          <Typography color="text.secondary">
            No data available
          </Typography>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="date" />

              <YAxis yAxisId="left" />

              <YAxis
                yAxisId="right"
                orientation="right"
              />

              <Tooltip
                formatter={(value, name) =>
                  name === "Revenue"
                    ? `₹${value.toLocaleString("en-IN")}`
                    : value
                }
              />

              <Legend />

              <Line
                yAxisId="left"
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke="#2563eb"
                strokeWidth={3}
                activeDot={{ r: 7 }}
              />

              <Line
                yAxisId="right"
                type="monotone"
                dataKey="sales"
                name="Sales"
                stroke="#16a34a"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}

export default RevenueChart;