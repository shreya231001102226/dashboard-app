import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@mui/material";

function Filters({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  category,
  setCategory,
  status,
  setStatus,
  onReset,
}) {
  return (
    <Box className="filters">

      <TextField
        label="Start Date"
        type="date"
        size="small"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      <TextField
        label="End Date"
        type="date"
        size="small"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        slotProps={{
          inputLabel: { shrink: true },
        }}
      />

      <FormControl size="small">
        <InputLabel>Category</InputLabel>

        <Select
          value={category}
          label="Category"
          onChange={(e) => setCategory(e.target.value)}
        >
          <MenuItem value="All">All Categories</MenuItem>
          <MenuItem value="Electronics">Electronics</MenuItem>
          <MenuItem value="Fashion">Fashion</MenuItem>
          <MenuItem value="Home">Home</MenuItem>
        </Select>
      </FormControl>

      <FormControl size="small">
        <InputLabel>Status</InputLabel>

        <Select
          value={status}
          label="Status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="All">All Statuses</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
          <MenuItem value="Processing">Processing</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="Cancelled">Cancelled</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="outlined"
        color="secondary"
        onClick={onReset}
      >
        Reset Filters
      </Button>

    </Box>
  );
}

export default Filters;