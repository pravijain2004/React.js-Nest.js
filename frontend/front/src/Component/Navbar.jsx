import React from "react";
import { 
  AppBar, Toolbar, Typography, Box, IconButton, Button, InputBase, 
  useMediaQuery, Grid, Link, Divider, GlobalStyles 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, AccountCircle, Search } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // Breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Mobile: <600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // Tablet: 600px-960px
  const isDesktop = useMediaQuery(theme.breakpoints.up("md")); // Desktop: >960px

  return (
    <>
      {/* Global Styles for Removing Margin & Padding */}
      <GlobalStyles
        styles={{
          "*, *::before, *::after": {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
          },
          "body, html": {
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
          },
        }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        {/* Navbar */}
        <AppBar position="static" sx={{ backgroundColor: "#2874f0" }}>
          <Toolbar sx={{ display: "flex", alignItems: "center" }}>
            {/* Logo */}
            <Box sx={{ display: "flex", alignItems: "center", minWidth: "150px", paddingLeft: "16px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Magneto</Typography>
              <Typography variant="body2" sx={{ marginLeft: 1, color: "yellow" }}>Explore Plus</Typography>
            </Box>

            {/* Search Bar */}
            <Box 
              sx={{ 
                display: "flex", 
                alignItems: "center", 
                backgroundColor: "white", 
                borderRadius: "4px", 
                padding: "4px 8px", 
                flexGrow: 1, 
                maxWidth: isMobile ? "60%" : isTablet ? "70%" : "600px",
                marginX: "10px" 
              }}
            >
              <Search sx={{ color: "gray" }} />
              <InputBase placeholder="Search for products, brands, and more" sx={{ marginLeft: 1, flex: 1 }} />
            </Box>

            {/* Buttons & Icons */}
            <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              {isDesktop && (
                <Button color="inherit" sx={{ textTransform: "none" }} onClick={() => navigate("/sell")}>Become a Seller</Button>
              )}
              {(isTablet || isDesktop) && (
                <Button color="inherit" sx={{ marginLeft: 2, textTransform: "none" }} onClick={() => navigate("/login")}>Login</Button>
              )}
              {!isMobile && (
                <IconButton color="inherit" onClick={() => navigate("/cart")}><ShoppingCart /></IconButton>
              )}
              <IconButton color="inherit" onClick={() => navigate("/account")}><AccountCircle /></IconButton>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}></Box>

        {/* Footer */}
        <Box sx={{ backgroundColor: "#172337", color: "white", padding: 0, marginTop: 0 }}>
          <Grid container spacing={2} sx={{ maxWidth: "1200px", margin: 0, fontSize: "14px", padding: 0 }}>
            <Grid item xs={6} sm={3}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold", marginBottom: "0px" }}>ABOUT</Typography>
              <Link href="#" color="inherit" display="block">Contact Us</Link>
              <Link href="#" color="inherit" display="block">About Us</Link>
              <Link href="#" color="inherit" display="block">Careers</Link>
              <Link href="#" color="inherit" display="block">Magneto Stories</Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold", marginBottom: "0px" }}>HELP</Typography>
              <Link href="#" color="inherit" display="block">Payments</Link>
              <Link href="#" color="inherit" display="block">Shipping</Link>
              <Link href="#" color="inherit" display="block">Cancellation & Returns</Link>
              <Link href="#" color="inherit" display="block">FAQ</Link>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="subtitle2" sx={{ fontWeight: "bold", marginBottom: "0px" }}>CONSUMER POLICY</Typography>
              <Link href="#" color="inherit" display="block">Cancellation & Returns</Link>
              <Link href="#" color="inherit" display="block">Terms Of Use</Link>
              <Link href="#" color="inherit" display="block">Security</Link>
              <Link href="#" color="inherit" display="block">Privacy</Link>
            </Grid>
          </Grid>

          <Divider sx={{ backgroundColor: "gray", marginY: "16px" }} />

          <Grid container spacing={2} sx={{ maxWidth: "1200px", margin: "auto", textAlign: "center", fontSize: "12px", padding: 0 }}>
            <Grid item xs={4}><Link href="#" color="inherit">Become a Seller</Link></Grid>
            <Grid item xs={4}><Link href="#" color="inherit">Advertise</Link></Grid>
            <Grid item xs={4}><Link href="#" color="inherit">Gift Cards</Link></Grid>
          </Grid>

          <Typography variant="body2" align="center" sx={{ marginTop: "12px", fontSize: "12px" }}>© 2007-2025 Magneto.com</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
