import { Box, Divider, Typography } from "@mui/material";

interface SummaryDetails {
  price: number;
  count: number;
}

const Ordersummary = ({ price, count }: SummaryDetails) => {
  return (
    <Box bgcolor="#F5F5F7" borderRadius={3} p={2.5}>
      <Typography variant="h5" fontWeight={700}>
        Order Summary
      </Typography>

      <Divider sx={{ mt: "10px" }} />

      <Box display="flex" justifyContent="space-between" mt={4}>
        <Typography>Sub total</Typography>

        <Typography>{price * count}৳</Typography>
      </Box>

      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography fontWeight={600}>VAT</Typography>

        <Typography>50৳</Typography>
      </Box>

      <Divider sx={{ mt: "20px" }} />

      <Box display="flex" justifyContent="space-between" mt={1}>
        <Typography fontWeight={600}>Total</Typography>

        <Typography>BDT {price * count + 50}৳</Typography>
      </Box>
    </Box>
  );
};

export default Ordersummary;
