import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import img01 from "@/assets/image/1.jpeg";
import img02 from "@/assets/image/2.jpeg";
import img03 from "@/assets/image/3.jpeg";
import Link from "next/link";

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
      <Grid container spacing={4} mt={4}>
        {/* Card 1 */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "100%" }}>
            <Image
              src={img01}
              alt="New Arrival"
              style={{ width: "100%", maxHeight: "350px" }}
            />
            <Box p={2}>
              <Typography variant="h5" component="h2">
                New Arrival
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the latest trends in fashion and lifestyle with our new
                arrivals. From stylish apparel to cutting-edge gadgets.
              </Typography>
              <Typography
                variant="h6"
                color="primary.main"
                fontFamily="Inter, Circular"
                mt={1}
              >
                Price: 550৳
              </Typography>
            </Box>
            <Box p={1}>
              <Link href="/product/1" passHref>
                <Button variant="contained" fullWidth>
                  Order Now
                </Button>
              </Link>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "100%" }}>
            <Image
              src={img02}
              alt="New Arrival"
              style={{ width: "100%", maxHeight: "350px" }}
            />
            <Box p={2}>
              <Typography variant="h5" component="h2">
                New Arrival
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the latest trends in fashion and lifestyle with our new
                arrivals. From stylish apparel to cutting-edge gadgets.
              </Typography>
              <Typography
                variant="h6"
                color="primary.main"
                fontFamily="Inter, Circular"
                mt={1}
              >
                Price: 550৳
              </Typography>
            </Box>
            <Box p={1}>
              <Link href="/product/1" passHref>
                <Button variant="contained" fullWidth>
                  Order Now
                </Button>
              </Link>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ maxWidth: "100%" }}>
            <Image
              src={img03}
              alt="New Arrival"
              style={{ width: "100%", maxHeight: "350px" }}
            />
            <Box p={2}>
              <Typography variant="h5" component="h2">
                New Arrival
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Discover the latest trends in fashion and lifestyle with our new
                arrivals. From stylish apparel to cutting-edge gadgets.
              </Typography>
              <Typography
                variant="h6"
                color="primary.main"
                fontFamily="Inter, Circular"
                mt={1}
              >
                Price: 550৳
              </Typography>
            </Box>
            <Box p={1}>
              <Link href="/product/1" passHref>
                <Button variant="contained" fullWidth>
                  Order Now
                </Button>
              </Link>
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default NewArraival;
