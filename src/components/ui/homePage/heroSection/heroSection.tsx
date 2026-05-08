import { Box, Container, Stack, Typography } from "@mui/material";

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
        <Box>
          <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
            Look Better. Feel Strong <br />
            <Box component="span" sx={{ color: "primary.main" }}>
              Save 30% on Your First Order!
            </Box>
          </Typography>
          <Typography>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            cumque, voluptate, voluptate, voluptate, voluptate, voluptate
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
