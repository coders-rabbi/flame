import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ProductImg01 from "@/assets/image/4.jpeg";
import Image from "next/image";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

const ProductDetails = () => {
  return (
    <Container>
      <Grid container spacing={0} mt={5}>
        {/* products details */}
        <Grid item xs={12} md={8} bgcolor="red">
          <Grid container gap={2}>
            <Grid
              item
              xs={12}
              md={5}
              alignItems="center"
              justifyContent="center"
              height="400px"
              position="relative" // ইমেজ fill করার জন্য এটি প্রয়োজন
              overflow="hidden" // ইমেজ যাতে বর্ডার ক্রস না করে
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  boxShadow: 1,
                  background: "green",
                }}
              >
                <Image
                  src={ProductImg01}
                  alt="Product Image"
                  fill // এটি ইমেজকে প্যারেন্ট বক্সের সমান করে দেবে
                  style={{
                    objectFit: "contain", // ইমেজ যাতে ফেটে না যায় বা কেটে না যায়
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" fontWeight={500}>
                  New Arraival
                </Typography>
                <Typography variant="h6" fontWeight={600} mt={2}>
                  BDT 550৳
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  Color:{" "}
                  <Box component="span" fontWeight={500} fontSize="1rem">
                    Black/White
                  </Box>
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  Size:{" "}
                  <Box component="span" fontWeight={500} fontSize="1rem">
                    M/L/XL/XXL
                  </Box>
                </Typography>
                <Typography variant="h6" fontWeight={600}>
                  Quantity:{" "}
                  <Box component="span" fontWeight={500} fontSize="1rem">
                    M/L/XL/XXL
                  </Box>
                </Typography>
                <Box mt={2}>
                  <Button endIcon={<ShoppingBagIcon />}>Add Cart</Button>
                </Box>
              </Box>
              <Box></Box>
            </Grid>
          </Grid>
        </Grid>

        {/* order summary */}
        <Grid item xs={12} md={4}>
          <Box bgcolor="#F5F5F7" borderRadius={3} p={2.5}>
            <Typography variant="h5" fontWeight={700}>
              Order Summary
            </Typography>
            <Divider sx={{ mt: "10px" }} />
            <Box display="flex" justifyContent="space-between" mt={4}>
              <Typography>Sub total</Typography>
              <Typography>550৳</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography fontWeight={600}>VAT</Typography>
              <Typography>50৳</Typography>
            </Box>
            <Divider sx={{ mt: "20px" }} />
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography fontWeight={600}>Total</Typography>
              <Typography>BDT 550৳</Typography>
            </Box>
          </Box>
          <Button fullWidth sx={{ mt: "30px" }}>
            Procced to CheckOut
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
