"use client";
import Ordersummary from "@/components/ui/ordersummary/ordersummary";
import {
  Box,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { useSearchParams } from "next/navigation";

const Shipping_Address = () => {
  const searchParams = useSearchParams();
  // Receive props from URL query params
  const productId = searchParams.get("productId");
  const price = Number(searchParams.get("price"));
  const count = Number(searchParams.get("count"));

  console.log({ productId, price, count });
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <Box p={4} boxShadow={1} borderRadius={3} mt={4} mb={2}>
            <Typography variant="h5" mb={1} fontWeight={600}>
              Checkout Page
            </Typography>
            <Typography lineHeight={1.5}>
              Enter your valid information for your receiving products. Enter
              your valid information for your receiving products
            </Typography>
          </Box>

          <Box p={4} boxShadow={1} borderRadius={3}>
            <Typography variant="h6" fontWeight={600} mb={4}>
              Shapping Information
            </Typography>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Box flexGrow={1}>
                <Typography mb={1} fontSize="14px" fontWeight={600}>
                  নামের প্রথম অংশ
                </Typography>
                <TextField
                  fullWidth
                  placeholder="রাব্বি"
                  name="firstName"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },

                    "& .MuiOutlinedInput-input": {
                      py: 1.2,
                    },
                  }}
                />
              </Box>

              <Box flexGrow={1}>
                <Typography mb={1} fontSize="14px" fontWeight={600}>
                  নামের শেষ অংশ
                </Typography>

                <TextField
                  fullWidth
                  placeholder="মিয়া"
                  name="lastName"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },

                    "& .MuiOutlinedInput-input": {
                      py: 1.2,
                    },
                  }}
                />
              </Box>
            </Stack>
            <Box mt={2.5}>
              <Typography mb={1} fontSize="14px" fontWeight={600}>
                ঠিকানা
              </Typography>

              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },

                  "& .MuiOutlinedInput-input": {
                    py: 1.2,
                  },
                }}
                fullWidth
                placeholder="OHB 9, কাফরুল থানার বিপরীত পাশে, মিরপুর ১৪"
                name="phone"
                // value={formData.phone}
                // onChange={handleChange}
              />
            </Box>

            <Stack
              mt={2.5}
              direction="row"
              justifyContent="center"
              alignItems="center"
              gap={2}
            >
              <Box flexGrow={1}>
                <Typography mb={1} fontSize="14px" fontWeight={600}>
                  থানা
                </Typography>

                <TextField
                  fullWidth
                  placeholder="কাফরুল"
                  name="Thana"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },

                    "& .MuiOutlinedInput-input": {
                      py: 1.2,
                    },
                  }}
                />
              </Box>

              <Box flexGrow={1}>
                <Typography mb={1} fontSize="14px" fontWeight={600}>
                  জেলা
                </Typography>

                <TextField
                  fullWidth
                  placeholder="ঢাকা"
                  name="District"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                    },

                    "& .MuiOutlinedInput-input": {
                      py: 1.2,
                    },
                  }}
                />
              </Box>
            </Stack>

            <Box mt={2.5}>
              <Typography mb={1} fontSize="14px" fontWeight={600}>
                মোবাইল নাম্বার
              </Typography>

              <TextField
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "10px",
                  },

                  "& .MuiOutlinedInput-input": {
                    py: 1.2,
                  },
                }}
                fullWidth
                placeholder="+880 (130) 332-9413"
                name="phone"
                // value={formData.phone}
                // onChange={handleChange}
              />
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={5} mt={4}>
          <Ordersummary price={price} count={count} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Shipping_Address;
