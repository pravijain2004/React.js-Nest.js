import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Button, InputBase, useMediaQuery, Grid, Link, Divider } from "@mui/material";
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
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ backgroundColor: "#2874f0", padding: "8px 16px" }}>
        <Toolbar sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold", flexShrink: 0 }}>Magneto</Typography>
            <Typography variant="body2" sx={{ marginLeft: 1, color: "yellow" }}>Explore Plus</Typography>
          </Box>
          
          {/* Search Bar (Only for Desktop) */}
          {isDesktop && (
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: "4px", padding: "4px 8px", flexGrow: 1, maxWidth: 600 }}>
              <Search sx={{ color: "gray" }} />
              <InputBase placeholder="Search for products, brands, and more" sx={{ marginLeft: 1, flex: 1 }} />
            </Box>
          )}
          
          {/* Buttons & Icons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isDesktop && (
              <Button color="inherit" sx={{ marginLeft: 2, textTransform: "none" }} onClick={() => navigate("/sell")}>Become a Seller</Button>
            )}
            {(isTablet || isDesktop) && (
              <Button color="inherit" sx={{ marginLeft: 2, textTransform: "none" }} onClick={() => navigate("/login")}>Login</Button>
            )}
            <IconButton color="inherit" onClick={() => navigate("/cart")}><ShoppingCart /></IconButton>
            <IconButton color="inherit" onClick={() => navigate("/account")}><AccountCircle /></IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Box sx={{ flexGrow: 1 }}></Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: "#172337", color: "white", padding: "16px", marginTop: "auto" }}>
        <Grid container spacing={2} sx={{ maxWidth: "1200px", margin: "auto", fontSize: "14px" }}>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", marginBottom: "8px" }}>ABOUT</Typography>
            <Link href="#" color="inherit" display="block">Contact Us</Link>
            <Link href="#" color="inherit" display="block">About Us</Link>
            <Link href="#" color="inherit" display="block">Careers</Link>
            <Link href="#" color="inherit" display="block">Magneto Stories</Link>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", marginBottom: "8px" }}>HELP</Typography>
            <Link href="#" color="inherit" display="block">Payments</Link>
            <Link href="#" color="inherit" display="block">Shipping</Link>
            <Link href="#" color="inherit" display="block">Cancellation & Returns</Link>
            <Link href="#" color="inherit" display="block">FAQ</Link>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Typography variant="subtitle2" sx={{ fontWeight: "bold", marginBottom: "8px" }}>CONSUMER POLICY</Typography>
            <Link href="#" color="inherit" display="block">Cancellation & Returns</Link>
            <Link href="#" color="inherit" display="block">Terms Of Use</Link>
            <Link href="#" color="inherit" display="block">Security</Link>
            <Link href="#" color="inherit" display="block">Privacy</Link>
          </Grid>
        </Grid>

        <Divider sx={{ backgroundColor: "gray", marginY: "16px" }} />

        <Grid container spacing={2} sx={{ maxWidth: "1200px", margin: "auto", textAlign: "center", fontSize: "12px" }}>
          <Grid item xs={4}><Link href="#" color="inherit">Become a Seller</Link></Grid>
          <Grid item xs={4}><Link href="#" color="inherit">Advertise</Link></Grid>
          <Grid item xs={4}><Link href="#" color="inherit">Gift Cards</Link></Grid>
        </Grid>

        <Typography variant="body2" align="center" sx={{ marginTop: "12px", fontSize: "12px" }}>© 2007-2025 Magneto.com</Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
