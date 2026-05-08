import { Box, Stack, Typography } from "@mui/material";

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
      <Stack>
        <Box>
          <Typography variant="h5" component="h1" sx={{ fontWeight: "bold" }}>
            Look Better. Feel Strong{" "} <br />
            <Box component="span" sx={{ color: "primary.main" }}>
              Save 30% on Your First Order! This Offer just for sazid!
            </Box>
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
};

export default HeroSection;