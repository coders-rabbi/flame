import { Box, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  // লিস্ট আইটেমগুলো
  const shopLinks = ["সব পণ্য", "ছেলে", "মেয়ে", "কসমেটিক্স", "টি-শার্ট"];
  const companyLinks = ["আমাদের গল্প", "আমাদের টিম", "ব্লগ", "আমাদের ভিশন"];
  const supportLinks = [
    "যোগাযোগ",
    "হোলসেল",
    "অর্ডার ট্র্যাক",
    "ফ্রিকোয়েন্টলি আস্কড কোয়েশ্চন",
  ];
  const importantLinks = [
    "প্রাইভেসি পলিসি",
    "শর্তাদি",
    "শিপিং পলিসি",
    "রিফান্ড পলিসি",
  ];

  return (
    <Box mt={4} bgcolor="#f5f5f5">
      <Grid
        container
        maxWidth="lg"
        mx="auto"
        spacing={4}
        py={4}
        px={2}
        justifyContent="space-between"
      >
        {/* লোগো সেকশন */}
        <Grid item xs={6} sm={6} md={2}>
          <Typography variant="h6" fontWeight="bold">
            Flame
          </Typography>
        </Grid>

        {/* SHOP সেকশন */}
        <Grid item xs={6} sm={6} md={2.4}>
          <Typography variant="h6" component="h2" fontWeight={600} mb={2}>
            SHOP
          </Typography>
          <Box>
            {shopLinks.map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                display="block"
                color="textSecondary"
                mb={1}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* OUR COMPANY সেকশন */}
        <Grid item xs={6} sm={6} md={2.4}>
          <Typography variant="h6" component="h2" fontWeight={600} mb={2}>
            OUR COMPANY
          </Typography>
          <Box>
            {companyLinks.map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                display="block"
                color="textSecondary"
                mb={1}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* SUPPORT সেকশন */}
        <Grid item xs={6} sm={6} md={2.4}>
          <Typography variant="h6" component="h2" fontWeight={600} mb={2}>
            SUPPORT
          </Typography>
          <Box>
            {supportLinks.map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                display="block"
                color="textSecondary"
                mb={1}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>

        {/* IMPORTANT LINKS সেকশন */}
        <Grid item xs={6} sm={6} md={2.4}>
          <Typography variant="h6" component="h2" fontWeight={600} mb={2}>
            IMPORTANT LINKS
          </Typography>
          <Box>
            {importantLinks.map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                display="block"
                color="textSecondary"
                mb={1}
              >
                {item}
              </Link>
            ))}
          </Box>
        </Grid>
      </Grid>

      {/* কপিরাইট সেকশন */}
      <Box py={2} bgcolor="#f5f5f5" borderTop="1px solid #e0e0e0">
        <Typography align="center" variant="body1" color="textSecondary">
          &copy; {new Date().getFullYear()}{" "}
          <Box component="span" fontWeight="bold" color="primary.main">
            Flame Street Wear
          </Box>
          . All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
