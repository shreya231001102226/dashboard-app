import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

function StatusChart({ orders }) {
  const statuses = [
    "Completed",
    "Processing",
    "Pending",
    "Cancelled",
  ];

  const COLORS = [
    "#16a34a",
    "#2563eb",
    "#f59e0b",
    "#dc2626",
  ];

  const chartData = statuses.map((status) => ({
    name: status,
    value: orders.filter(
      (order) => order.status === status
    ).length,
  }));

  return (
    <Card className="chart-card">
      <CardContent>
        <Typography variant="h6" fontWeight="bold" mb={2}>
          Order Status
        </Typography>

        {orders.length === 0 ? (
          <Typography color="text.secondary">
            No order data available
          </Typography>
        ) : (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={95}
                label
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={entry.name}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        )}
      </CardContent>
    </Card>
  );
}

export default StatusChart;