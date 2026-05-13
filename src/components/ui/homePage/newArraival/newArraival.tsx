import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import img01 from "@/assets/image/1.jpeg";
import img02 from "@/assets/image/2.jpeg";
import img03 from "@/assets/image/3.jpeg";
import img04 from "@/assets/image/4.jpeg";
import Link from "next/link";
import { Height } from "@mui/icons-material";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "900"],
});

const NewArraival = () => {
  return (
    <Container maxWidth="lg">
      <Typography
        variant="h4"
        component="h2"
        fontWeight={700}
        fontFamily={playfair.style.fontFamily}
        mt={8}
        align="center"
      >
        Not Just New{" "}
        <Box component="span" color="primary.main">
          Arrivals!
        </Box>
      </Typography>
      <Typography
        mt={2}
        align="center"
        fontFamily="Inter, Circular"
        fontSize="1.1rem"
      >
        But New Experiences. Explore the Latest Trends in Fashion and Lifestyle
        with Us.
      </Typography>

      {/* card section */}
      <Grid
        container
        spacing={2}
        mt={4}
        alignItems="center"
        justifyContent="center"
      >
        {/* Card 1 */}
        <Grid item xs={6} sm={4} md={3}>
          <Card sx={{ maxWidth: "100%" }}>
            <Image
              src={img01}
              alt="New Arrival"
              style={{ width: "100%", maxHeight: "300px", height: "300px" }}
              objectFit="cover"
            />
            <Box p={1}>
              <Typography variant="h6" component="h2">
                New Arrival
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the latest trends in fashion and lifestyle with our new
                arrivals.
              </Typography>
              <Typography
                fontSize="1rem"
                fontWeight={700}
                color="primary.main"
                fontFamily="Inter, Circular"
              >
                BDT: 550৳
              </Typography>
            </Box>
            <Box px={1} pb={1}>
              <Link href="/product/1" passHref>
                <Button variant="contained" fullWidth>
                  Order Now
                </Button>
              </Link>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <Card sx={{ maxWidth: "100%" }}>
            <Image
              src={img02}
              alt="New Arrival"
              style={{ width: "100%", maxHeight: "300px", height: "300px" }}
              objectFit="cover"
            />
            <Box p={1}>
              <Typography variant="h6" component="h2">
                New Arrival
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the latest trends in fashion and lifestyle with our new
                arrivals.
              </Typography>
              <Typography
                fontSize="1rem"
                fontWeight={700}
                color="primary.main"
                fontFamily="Inter, Circular"
              >
                BDT: 550৳
              </Typography>
            </Box>
            <Box px={1} pb={1}>
              <Link href="/product/1" passHref>
                <Button variant="contained" fullWidth>
                  Order Now
                </Button>
              </Link>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <Card sx={{ maxWidth: "100%" }}>
            <Image
              src={img03}
              alt="New Arrival"
              style={{ width: "100%", maxHeight: "300px", height: "300px" }}
              objectFit="cover"
            />
            <Box p={1}>
              <Typography variant="h6" component="h2">
                New Arrival
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the latest trends in fashion and lifestyle with our new
                arrivals.
              </Typography>
              <Typography
                fontSize="1rem"
                fontWeight={700}
                color="primary.main"
                fontFamily="Inter, Circular"
              >
                BDT: 550৳
              </Typography>
            </Box>
            <Box px={1} pb={1}>
              <Link href="/product/1" passHref>
                <Button variant="contained" fullWidth>
                  Order Now
                </Button>
              </Link>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={6} sm={4} md={3}>
          <Card sx={{ maxWidth: "100%" }}>
            <Image
              src={img04}
              alt="New Arrival"
              style={{ width: "100%", maxHeight: "300px", height: "300px" }}
              objectFit="cover"
            />
            <Box p={1}>
              <Typography variant="h6" component="h2">
                New Arrival
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the latest trends in fashion and lifestyle with our new
                arrivals.
              </Typography>
              <Typography
                fontSize="1rem"
                fontWeight={700}
                color="primary.main"
                fontFamily="Inter, Circular"
              >
                BDT: 550৳
              </Typography>
            </Box>
            <Box px={1} pb={1}>
              <Link href="/product/1" passHref>
                <Button variant="contained" fullWidth>
                  Order Now
                </Button>
              </Link>
            </Box>
          </Card>
        </Grid>

        <Box mt={4} display="flex" justifyContent="center" width="100%">
          <Link href="/products" passHref>
            <Button variant="contained" fullWidth>
              View All Products
            </Button>
          </Link>
        </Box>
      </Grid>
    </Container>
  );
};

export default NewArraival;
