import { useState } from "react";

import {
  Box,
  Container,
  Typography,
  Button,
} from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";

import { orders } from "./data/orders";

import StatCards from "./components/StatCards";
import RevenueChart from "./components/RevenueChart";
import StatusChart from "./components/StatusChart";
import Filters from "./components/Filters";
import RecentOrders from "./components/RecentOrders";

function App() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  // Filter orders
  const filteredOrders = orders.filter((order) => {
    const matchesStartDate =
      !startDate || order.date >= startDate;

    const matchesEndDate =
      !endDate || order.date <= endDate;

    const matchesCategory =
      category === "All" || order.category === category;

    const matchesStatus =
      status === "All" || order.status === status;

    return (
      matchesStartDate &&
      matchesEndDate &&
      matchesCategory &&
      matchesStatus
    );
  });

  // Reset all filters
  const resetFilters = () => {
    setStartDate("");
    setEndDate("");
    setCategory("All");
    setStatus("All");
  };

  return (
    <Box className="dashboard">

      {/* Header */}
      <Box className="header">
        <Box className="header-content">
          <Box className="header-title">
            <DashboardIcon sx={{ fontSize: 35 }} />

            <Box>
              <Typography variant="h4" fontWeight="bold">
                Admin Dashboard
              </Typography>

              <Typography variant="body2">
                Order Management Analytics
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            color="inherit"
            onClick={resetFilters}
          >
            Reset Dashboard
          </Button>
        </Box>
      </Box>

      <Container maxWidth="xl" className="main-container">

        {/* Filters */}
        <Box className="section">
          <Typography variant="h6" fontWeight="bold" mb={2}>
            Dashboard Filters
          </Typography>

          <Filters
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
            category={category}
            setCategory={setCategory}
            status={status}
            setStatus={setStatus}
            onReset={resetFilters}
          />

          {startDate && endDate && startDate > endDate && (
            <Typography color="error" mt={2}>
              Start date cannot be after end date.
            </Typography>
          )}
        </Box>

        {startDate && endDate && startDate > endDate ? (
          <Typography color="error" textAlign="center" mt={4}>
            Please select a valid date range.
          </Typography>
        ) : (
          <>
            {/* Summary Widgets */}
            <Box className="section">
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Overview
              </Typography>

              <StatCards orders={filteredOrders} />
            </Box>

            {/* Charts */}
            <Box className="section">
              <Typography variant="h6" fontWeight="bold" mb={2}>
                Analytics
              </Typography>

              <Box className="charts-grid">

                <RevenueChart orders={filteredOrders} />

                <StatusChart orders={filteredOrders} />

              </Box>
            </Box>

            {/* Recent Orders */}
            <Box className="section">
              <RecentOrders orders={filteredOrders} />
            </Box>
          </>
        )}

      </Container>

      <footer className="footer">
        <Typography>
          Order Management Dashboard © 2026 | React + Material UI + Recharts
        </Typography>
      </footer>

    </Box>
  );
}

export default App;