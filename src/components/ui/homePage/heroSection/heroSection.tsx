import { Box, Button, Container, Stack, Typography } from "@mui/material";
import SellIcon from "@mui/icons-material/Sell";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import img from "@/assets/image/codersrabbi.png";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#dfd7d0",
        display: "flex",
        // justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              variant="h3"
              className={playfair.className}
              style={{
                fontWeight: 900,
                color: "#333", // তোমার পছন্দের কালার দাও
                lineHeight: 1.2,
              }}
            >
              Look Better. Feel <br /> Stronger.{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Save 30% <br /> Now
              </Box>
            </Typography>
            <Typography
              sx={{ fontFamily: "Inter, Circular", lineHeight: 1.5, mt: 2 }}
            >
              Get the best fitness equipment and accessories to help you achieve{" "}
              your fitness goals. Shop now and save big on our top-quality
              products.
            </Typography>
            <Button
              variant="contained"
              size="large"
              endIcon={<SellIcon />}
              sx={{ mt: 2 }}
            >
              Shop Now
            </Button>
          </Box>
          <Box>
            <Image
              src={img}
              alt="Hero Image"
              style={{
                width: "450px",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
                zIndex: 1,
              }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
