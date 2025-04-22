import React from "react";
import { Box, Grid, Typography, Link, Divider } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#172337", color: "white", padding: "20px 0", marginTop: "auto" }}>
      <Grid container spacing={2} sx={{ maxWidth: "1200px", margin: "auto", fontSize: "14px", padding: "0 20px" }}>
        {/* ABOUT Section */}
        <Grid item xs={6} sm={3}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", marginBottom: "10px" }}>ABOUT</Typography>
          <Link href="#" color="inherit" display="block">Contact Us</Link>
          <Link href="#" color="inherit" display="block">About Us</Link>
          <Link href="#" color="inherit" display="block">Careers</Link>
          <Link href="#" color="inherit" display="block">Magneto Stories</Link>
        </Grid>

        {/* HELP Section */}
        <Grid item xs={6} sm={3}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", marginBottom: "10px" }}>HELP</Typography>
          <Link href="#" color="inherit" display="block">Payments</Link>
          <Link href="#" color="inherit" display="block">Shipping</Link>
          <Link href="#" color="inherit" display="block">Cancellation & Returns</Link>
          <Link href="#" color="inherit" display="block">FAQ</Link>
        </Grid>

        {/* CONSUMER POLICY Section */}
        <Grid item xs={6} sm={3}>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold", marginBottom: "10px" }}>CONSUMER POLICY</Typography>
          <Link href="#" color="inherit" display="block">Cancellation & Returns</Link>
          <Link href="#" color="inherit" display="block">Terms Of Use</Link>
          <Link href="#" color="inherit" display="block">Security</Link>
          <Link href="#" color="inherit" display="block">Privacy</Link>
        </Grid>
      </Grid>

      {/* Divider */}
      <Divider sx={{ backgroundColor: "gray", marginY: "16px" }} />

      {/* Footer Bottom Links */}
      <Grid container spacing={2} sx={{ maxWidth: "1200px", margin: "auto", textAlign: "center", fontSize: "12px", padding: "0 20px" }}>
        <Grid item xs={4}><Link href="#" color="inherit">Become a Seller</Link></Grid>
        <Grid item xs={4}><Link href="#" color="inherit">Advertise</Link></Grid>
        <Grid item xs={4}><Link href="#" color="inherit">Gift Cards</Link></Grid>
      </Grid>

      {/* Copyright Text */}
      <Typography variant="body2" align="center" sx={{ marginTop: "12px", fontSize: "12px" }}>
        © 2007-2025 Magneto.com
      </Typography>
    </Box>
  );
};

export default Footer;