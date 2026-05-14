"use client";
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
import { useState } from "react";

const ProductDetails = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <Container>
      <Grid container spacing={0} mt={5}>
        {/* products details */}
        <Grid item xs={12} md={8}>
          <Grid container gap={2}>
            <Grid
              item
              xs={12}
              md={5}
              alignItems="center"
              justifyContent="center"
              height="400px"
              position="relative"
              overflow="hidden"
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  boxShadow: 1,
                }}
              >
                <Image
                  src={ProductImg01}
                  alt="Product Image"
                  fill
                  style={{
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box>
                <Typography variant="h5" fontWeight={500}>
                  New Arrival
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

                <Stack direction="row" gap={1} mt={2}>
                  <Typography variant="h6" fontWeight={600}>
                    Quantity:
                  </Typography>
                  <Stack direction="row" alignItems="center" gap={1}>
                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleDecrement}
                    >
                      -
                    </Button>

                    <Typography sx={{ width: "30px", textAlign: "center" }}>
                      {count}
                    </Typography>

                    <Button
                      variant="outlined"
                      size="small"
                      onClick={handleIncrement}
                    >
                      +
                    </Button>
                  </Stack>
                </Stack>

                <Box mt={2}>
                  <Button variant="contained" endIcon={<ShoppingBagIcon />}>
                    Add Cart
                  </Button>
                </Box>
              </Box>
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
              <Typography>{550 * count}৳</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography fontWeight={600}>VAT</Typography>
              <Typography>50৳</Typography>
            </Box>
            <Divider sx={{ mt: "20px" }} />
            <Box display="flex" justifyContent="space-between" mt={1}>
              <Typography fontWeight={600}>Total</Typography>
              <Typography>BDT {550 * count + 50}৳</Typography>
            </Box>
          </Box>
          <Button variant="contained" fullWidth sx={{ mt: "30px" }}>
            Proceed to CheckOut
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
