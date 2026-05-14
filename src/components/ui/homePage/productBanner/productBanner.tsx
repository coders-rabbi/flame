import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import productBannerImg from "@/assets/image/test.png";
import vape01 from "@/assets/image/vape01.png";
import watch from "@/assets/image/Watch.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProductBanner = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Grid container spacing={3} alignItems="stretch">
        {/* Card 01 - Large Left Card */}
        <Grid item xs={12} md={5}>
          <Box
            bgcolor="#CFCFCF"
            height="420px"
            position="relative"
            borderRadius={4}
            overflow="hidden"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Box position="absolute" top={0} left={0} width="50%" height="100%">
              <Image
                src={productBannerImg}
                alt="Product Banner"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Box
              display="flex"
              justifyContent="flex-end"
              pr={4}
              sx={{ zIndex: 1 }}
            >
              <Box maxWidth="220px">
                <Typography
                  color="primary.main"
                  variant="h6"
                  fontWeight={500}
                  textAlign="right"
                >
                  Trendy and stylish
                </Typography>
                <Typography
                  color="secondary.main"
                  fontSize="1.5rem"
                  fontWeight={700}
                  lineHeight={1.2}
                  textAlign="right"
                >
                  Men's Collection
                </Typography>
                <Typography
                  color="secondary.main"
                  fontSize="1rem"
                  mt={1}
                  textAlign="right"
                >
                  Up to 65% Off
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ mt: 2, ml: "auto", display: "block" }}
                >
                  Shop Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right Side Column for Card 02, 03, and 04 */}
        <Grid item xs={12} md={7}>
          <Grid container spacing={2}>
            {/* Card 02 */}
            <Grid item xs={12} sm={6}>
              <Box
                height="200px"
                borderRadius={4}
                sx={{
                  background:
                    "linear-gradient(to right, #B39DDB 0%, #7E57C2 50%, #311B92 100%)",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <Grid container alignItems="center">
                  <Grid item xs={7}>
                    <Typography
                      fontSize=".7rem"
                      fontWeight={700}
                      color="white"
                      bgcolor="primary.main"
                      textAlign="center"
                      width="fit-content"
                      sx={{ borderRadius: "14px" }}
                      px={1.5}
                      mb={1}
                    >
                      25% OFF
                    </Typography>
                    <Typography
                      fontSize="1.1rem"
                      color="white"
                      fontWeight={700}
                    >
                      Vape Collection
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        color: "white",
                        mt: 1,
                        p: 0,
                        minWidth: 0,
                        textTransform: "none",
                      }}
                      endIcon={
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "10px !important" }}
                        />
                      }
                    >
                      Shop Now
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Image
                      src={vape01}
                      alt="Vape"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "180px",
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Card 03 */}
            <Grid item xs={12} sm={6}>
              <Box
                height="200px"
                borderRadius={4}
                sx={{
                  background:
                    "linear-gradient(to right, #ffc49a 0%, #FF6B00 100%)",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <Grid container alignItems="center">
                  <Grid item xs={7}>
                    <Typography
                      fontSize=".7rem"
                      fontWeight={700}
                      color="white"
                      bgcolor="primary.main"
                      textAlign="center"
                      width="fit-content"
                      sx={{ borderRadius: "14px" }}
                      px={1.5}
                      mb={1}
                    >
                      25% OFF
                    </Typography>
                    <Typography
                      fontSize="1.1rem"
                      color="white"
                      fontWeight={700}
                    >
                      Vape Collection
                    </Typography>
                    <Button
                      variant="text"
                      sx={{
                        color: "white",
                        mt: 1,
                        p: 0,
                        minWidth: 0,
                        textTransform: "none",
                      }}
                      endIcon={
                        <ArrowForwardIosIcon
                          sx={{ fontSize: "10px !important" }}
                        />
                      }
                    >
                      Shop Now
                    </Button>
                  </Grid>
                  <Grid item xs={5}>
                    <Image
                      src={watch}
                      alt="Watch"
                      style={{
                        objectFit: "contain",
                        width: "100%",
                        height: "180px",
                        maxHeight: "100%",
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            {/* Card 04 - Full Width on Right side */}
            <Grid item xs={12}>
              <Box
                height="200px"
                borderRadius={4}
                sx={{
                  background:
                    "linear-gradient(to right, #DFD7D0 0%, #DFD8D4 100%)",
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <Grid container alignItems="center">
                  <Grid item xs={8} pl={1}>
                    <Typography
                      fontSize=".8rem"
                      fontWeight={700}
                      color="white"
                      bgcolor="primary.main"
                      textAlign="center"
                      width="fit-content"
                      sx={{ borderRadius: "14px" }}
                      px={2}
                      mb={1}
                    >
                      25% OFF
                    </Typography>
                    <Typography
                      fontSize="1.5rem"
                      color="secondary.body"
                      fontWeight={700}
                    >
                      Latest Collection 2026
                    </Typography>
                    <Button
                      variant="text"
                      sx={{ color: "primary", mt: 1 }}
                      endIcon={<ArrowForwardIosIcon />}
                    >
                      Explore More
                    </Button>
                  </Grid>
                  <Grid item xs={4} display="flex" justifyContent="flex-end">
                    <Image
                      src={productBannerImg}
                      alt="Banner"
                      style={{
                        objectFit: "contain",
                        width: "200px",
                        height: "200px",
                        maxHeight: "100%",
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductBanner;
