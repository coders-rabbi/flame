"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link"; // Next.js Link ব্যবহার করা হয়েছে
import MenuIcon from "@mui/icons-material/Menu";
import logo from "@/assets/svg/logo.svg";
import Image from "next/image";
import { Person, Search, ShoppingCart } from "@mui/icons-material";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // টাইপস্ক্রিপ্ট এরর দূর করতে ফাংশনের প্যারামিটার আপডেট
  const handleDrawerToggle = (_?: object, reason?: string) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") {
      setMobileOpen(false);
      return;
    }
    setMobileOpen((prev) => !prev);
  };

  const menuItems = [
    { label: "সব পণ্য", path: "/" },
    { label: "ছেলে", path: "/men" },
    { label: "মেয়ে", path: "/women" },
    { label: "কসমেটিক্স", path: "/cosmetics" },
    { label: "যোগাযোগ", path: "/contact" },
  ];

  const drawer = (
    <Box sx={{ width: 250, p: 2 }} role="presentation">
      <Typography
        variant="h6"
        sx={{
          my: 2,
          fontWeight: "bold",
          textAlign: "center",
          color: "secondary.main",
        }}
      >
        FLA{" "}
        <Box component="span" sx={{ color: "primary.main" }}>
          ME
        </Box>
      </Typography>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              href={item.path}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemText
                primary={item.label}
                sx={{ color: "secondary.main" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Button
        component={Link}
        href="/donate"
        variant="contained"
        fullWidth
        sx={{ mt: 2 }}
        onClick={() => setMobileOpen(false)}
      >
        সাইন ইন
      </Button>
    </Box>
  );

  return (
    <Stack
      borderRadius={2}
      bgcolor="#DFD7D0"
      sx={{
        // position: "sticky",
        top: 0,
        zIndex: 1200,
        borderBottom: "2px solid",
        borderColor: "#e0e0e0",
      }}
    >
      <Stack
        component={Container}
        py={2}
        px={3}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          color="secondary.main"
          variant="h5"
          component={Link}
          href="/"
          sx={{
            fontWeight: 600,
            fontFamily: "Bubblegum Sans, cursive",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
          }}
        >
          FLA{" "}
          <Box
            component="span"
            sx={{
              color: "primary.main",
              fontFamily: "sans-serif",
              fontWeight: 700,
            }}
          >
            ME
          </Box>
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          {menuItems.map((item) => (
            <Typography
              key={item.label}
              component={Link}
              href={item.path}
              variant="body2"
              sx={{
                color: "secondary.main",
                textDecoration: "none",
                fontWeight: 700,
                "&:hover": { color: "primary.main" },
              }}
            >
              {item.label}
            </Typography>
          ))}
        </Stack>

        <Stack direction="row" spacing={1} alignItems="center">
          <Search />
          <ShoppingCart />
          <Person
            sx={{
              color: "secondary.main",
              display: { xs: "none", lg: "block" },
            }}
          />

          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { lg: "none" }, color: "secondary.main" }}
          >
            <MenuIcon />
          </IconButton>
        </Stack>
      </Stack>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: "block", lg: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 250 },
          zIndex: 1300,
        }}
      >
        {drawer}
      </Drawer>
    </Stack>
  );
};

export default Navbar;
