import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import productBannerImg from "@/assets/image/test.png";
import vape01 from "@/assets/image/vape01.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProductBanner = () => {
  return (
    <Container>
      <Grid
        container
        // spacing={2}
        alignItems="center"
        justifyContent="center"
        mt={4}
        mx="auto"
        gap={2}
      >
        <Grid
          item
          xs={12}
          md={5}
          bgcolor="#CFCFCF"
          height="400px"
          position="relative"
          borderRadius={4}
        >
          <Box position="absolute" top={0} left={0} width="100%" height="100%">
            <Image
              src={productBannerImg}
              alt="Product Banner"
              style={{
                objectFit: "cover",
                width: "50%",
                height: "100%",
              }}
            />
          </Box>
          <Box display="flex" justifyContent="flex-end" pr={4} mt={5}>
            <Box>
              <Typography
                color="primary.main"
                variant="h6"
                fontFamily="sans-serif"
                textAlign="right"
              >
                Trendy and stylish
              </Typography>
              <Typography
                fontFamily="sans-serif"
                color="secondary.main"
                fontSize="2rem"
                fontWeight={700}
              >
                Men's Collection
              </Typography>
              <Typography
                fontFamily="Inter, Circular"
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
                sx={{ mt: 1, ml: "auto", display: "block" }}
              >
                Shop Now
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container alignItems="center" justifyContent="center">
            <Grid
              item
              xs={12}
              md={6}
              height="200px"
              borderRadius={4}
              style={{
                background:
                  "linear-gradient(to right, #B39DDB 0%, #7E57C2 50%, #311B92 100%)",
              }}
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={6} pl={1}>
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
                  <Typography fontSize="1rem" color="white" fontWeight={700}>
                    Vape Collection
                  </Typography>
                  <Button
                    variant="text"
                    sx={{ color: "white", mt: 1 }}
                    endIcon={<ArrowForwardIosIcon />}
                  >
                    Shop Now
                  </Button>
                </Grid>

                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Image
                    src={vape01}
                    alt="Vape Collection"
                    style={{
                      objectFit: "contain",
                      width: "220px",
                      height: "190px",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      marginRight: 0,
                      marginLeft: "auto",
                      display: "block",
                    }}
                  />
                </Grid>
              </Grid>
              ;
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              height="200px"
              borderRadius={4}
              style={{
                background:
                  "linear-gradient(to right, #B39DDB 0%, #7E57C2 50%, #311B92 100%)",
              }}
            >
              <Grid
                container
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={6} pl={1}>
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
                  <Typography fontSize="1rem" color="white" fontWeight={700}>
                    Vape Collection
                  </Typography>
                  <Button
                    variant="text"
                    sx={{ color: "white", mt: 1 }}
                    endIcon={<ArrowForwardIosIcon />}
                  >
                    Shop Now
                  </Button>
                </Grid>
                
                <Grid
                  item
                  xs={6}
                  display="flex"
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Image
                    src={vape01}
                    alt="Vape Collection"
                    style={{
                      objectFit: "contain",
                      width: "220px",
                      height: "190px",
                      maxWidth: "100%",
                      maxHeight: "100%",
                      marginRight: 0,
                      marginLeft: "auto",
                      display: "block",
                    }}
                  />
                </Grid>
              </Grid>
              ;
            </Grid>

            <Grid item xs={12} md={12} bgcolor="blue">
              <Typography>This is Kids Section</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductBanner;
