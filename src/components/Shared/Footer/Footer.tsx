import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
  Stack,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import logo from "@/assets/logo/logo.png";
import Image from "next/image";

const Footer = () => {
  // লিস্ট আইটেমগুলো
  const shopLinks = ["সব পণ্য", "ছেলে", "মেয়ে", "কসমেটিক্স", "টি-শার্ট"];
  const companyLinks = [
    "আমাদের গল্প",
    "আমাদের টিম",
    "ব্লগ",
    "আমাদের ভিশন",
    "যোগাযোগ",
    "অর্ডার ট্র্যাক",
  ];
  const importantLinks = [
    "প্রাইভেসি পলিসি",
    "শর্তাদি",
    "হোলসেল",
    "শিপিং পলিসি",
    "রিফান্ড পলিসি",
  ];

  return (
    <Box mt={4} bgcolor="#f5f5f5">
      <Grid
        container
        mx="auto"
        // spacing={4}
        justifyContent="space-around"
        py={5}
        sx={{ px: { xs: 2, sm: 4 } }}
      >
        {/* লোগো এবং কন্টাক্ট সেকশন */}
        <Grid item xs={12} sm={6} md={3}>
          <Box mb={1.5}>
            <Image src={logo} alt="logo" style={{width: "150px"}} />
          </Box>

          <Stack direction="row" alignItems="center" spacing={1} mb={1.5}>
            <EmailIcon fontSize="small" color="action" />
            <Typography variant="body2" color="textSecondary">
              contact@flame.com
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1} mb={3}>
            <PhoneIcon fontSize="small" color="action" />
            <Typography variant="body2" color="textSecondary">
              (+880) 1303329413
            </Typography>
          </Stack>

          {/* ইমেল ইনপুট ফিল্ড */}
          <Box sx={{ maxWidth: 280 }}>
            <Typography variant="body2" fontWeight="600" mb={1}>
              নিউজলেটার সাবস্ক্রাইব করুন
            </Typography>
            <TextField
              fullWidth
              size="small"
              placeholder="আপনার ইমেল লিখুন"
              variant="outlined"
              sx={{
                bgcolor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      size="small"
                      sx={{
                        bgcolor: "primary.main",
                        color: "white",
                        "&:hover": { bgcolor: "primary.dark" },
                        borderRadius: "6px",
                      }}
                    >
                      <ArrowForwardIcon fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Grid>

        {/* SHOP সেকশন */}
        <Grid item xs={6} sm={6} md={2} sx={{ mt: { xs: 2, sm: 2, md: 0 } }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={2}>
            SHOP
          </Typography>
          <Stack spacing={1}>
            {shopLinks.map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                color="textSecondary"
                variant="body2"
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Grid>

        {/* OUR COMPANY সেকশন */}
        <Grid item xs={6} sm={6} md={2} sx={{ mt: { xs: 2, sm: 2, md: 0 } }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={2}>
            OUR COMPANY
          </Typography>
          <Stack spacing={1}>
            {companyLinks.map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                color="textSecondary"
                variant="body2"
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Grid>

        {/* IMPORTANT LINKS সেকশন */}
        <Grid item xs={12} sm={6} md={2.5} sx={{ mt: { xs: 2, sm: 2, md: 0 } }}>
          <Typography variant="subtitle1" fontWeight="bold" mb={2}>
            IMPORTANT LINKS
          </Typography>
          <Stack spacing={1}>
            {importantLinks.map((item) => (
              <Link
                key={item}
                href="#"
                underline="hover"
                color="textSecondary"
                variant="body2"
              >
                {item}
              </Link>
            ))}
          </Stack>
        </Grid>
      </Grid>

      {/* কপিরাইট সেকশন */}
      <Box py={3} bgcolor="#eee" borderTop="1px solid #e0e0e0">
        <Typography align="center" variant="body2" color="textSecondary">
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
