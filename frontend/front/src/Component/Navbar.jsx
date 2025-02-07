import React from "react";
import { 
  AppBar, Toolbar, Typography, Box, IconButton, Button, InputBase, 
  useMediaQuery, GlobalStyles 
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, AccountCircle, Search } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import CategoryBar from "./CategoryBar";  // Import CategoryBar Component
import Footer from "./Footer"; // Import Footer Component

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  // Breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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

        {/* Category Bar Below Navbar */}
        <CategoryBar />

        {/* Main Content */}
        <Box sx={{ flexGrow: 1 }}></Box>

        {/* Footer */}
        <Footer />
      </Box>
    </>
  );
};

export default Navbar;
