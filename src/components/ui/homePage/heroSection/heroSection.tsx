import { Box, Button, Container, Grid, Typography } from "@mui/material";
import SellIcon from "@mui/icons-material/Sell";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import img from "@/assets/image/codersrabbi.png";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const HeroSection = () => {
  return (
    <Box
      sx={{
        bgcolor: "#dfd7d0",
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        py: { xs: 6, md: 0 }, // মোবাইলে প্যাডিং কমানো হয়েছে
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={2} // মোবাইলে স্পেসিং কমানো হয়েছে
          alignItems="center"
          direction="row" // আপনার রিকোয়েস্ট অনুযায়ী রিভার্স করা হয়নি
        >
          {/* Text Content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h3"
              className={playfair.className}
              sx={{
                fontWeight: 900,
                color: "#333",
                lineHeight: 1.1,
                fontSize: { xs: "1.8rem", sm: "2.2rem", md: "3.5rem" }, // মোবাইলে ফন্ট বেশ ছোট করা হয়েছে
              }}
            >
              Look Better. Feel <br /> Stronger.{" "}
              <Box component="span" sx={{ color: "primary.main" }}>
                Save 30% Now
              </Box>
            </Typography>

            <Typography
              sx={{
                fontFamily: "Inter, Circular",
                lineHeight: 1.4,
                mt: 1.5,
                fontSize: { xs: "0.9rem", md: "1rem" }, // প্যারাগ্রাফ ফন্টও ছোট করা হয়েছে
                maxWidth: { xs: "280px", sm: "100%", md: "500px" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              Get the best fitness equipment and accessories to help you achieve
              your fitness goals.
            </Typography>

            <Link href="/shop" passHref>
              <Button
                variant="contained"
                size="medium" // মোবাইলের জন্য সাইজ মিডিয়াম করা হয়েছে
                endIcon={<SellIcon />}
                sx={{
                  mt: 3,
                  px: 3,
                  fontSize: { xs: "0.8rem", md: "1rem" },
                }}
              >
                Shop Now
              </Button>
            </Link>
          </Grid>

          {/* Image Content */}
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: { xs: 4, md: 0 },
            }}
          >
            <Box
              sx={{
                width: { xs: "200px", sm: "300px", md: "100%" }, // মোবাইলে ইমেজ অনেক ছোট (২০০ পিক্সেল) করা হয়েছে
                maxWidth: "500px",
                position: "relative",
              }}
            >
              <Image
                src={img}
                alt="Hero Image"
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
