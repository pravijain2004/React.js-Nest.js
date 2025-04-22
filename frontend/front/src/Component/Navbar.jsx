import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Button, InputBase, useMediaQuery, GlobalStyles,Menu,MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ShoppingCart, AccountCircle, Search } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import Footer from "./Footer";

const Navbar = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl,setAnchorEl] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleMenuOpen = (event) =>{
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () =>{
    setAnchorEl(null);
  }

  const handleLogout = () => {
    localStorage.removeItem("username");
    setUsername("");
    handleMenuClose();
    navigate("/login");
  };

  // Breakpoints
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <GlobalStyles styles={{ "*, *::before, *::after": { margin: 0, padding: 0, boxSizing: "border-box" }, "body, html": { margin: 0, padding: 0, width: "100%", height: "100%" } }} />

      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ backgroundColor: "#2874f0" }}>
       <Toolbar sx={{ display: "flex", alignItems: "center" }}>
            {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center", minWidth: "150px", paddingLeft: "16px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>Magneto</Typography>
              <Typography variant="body2" sx={{ marginLeft: 1, color: "yellow" }}>Explore Plus</Typography>
            </Box>

            {/* Search Bar */}
            <Box sx={{ display: "flex", alignItems: "center", backgroundColor: "white", borderRadius: "4px", padding: "4px 8px", flexGrow: 1, maxWidth: isMobile ? "60%" : isTablet ? "70%" : "600px", marginX: "10px" }}>
              <Search sx={{ color: "gray" }} />
              <InputBase placeholder="Search for products, brands, and more" sx={{ marginLeft: 1, flex: 1 }} />
            </Box>

            {/* Buttons & Icons */}
            <Box sx={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              {isDesktop && <Button color="inherit" sx={{ textTransform: "none" }} onClick={() => navigate("/sell")}>Become a Seller</Button>}

              {/* Login Button - Show only when not logged in */}
              {(isTablet || isDesktop) && !username && (
                <Button color="inherit" sx={{ marginLeft: 2, textTransform: "none" }} onClick={() => navigate("/login")}>Login</Button>
              )}

              {/* Shopping Cart Icon */}
              {!isMobile && <IconButton color="inherit" onClick={() => navigate("/cart")}><ShoppingCart /></IconButton>}

              {/* Account - Show username if logged in, else show Account Icon */}
              <Box sx={{position: "relative"}}>
              <IconButton color="inherit" onMouseEnter={handleMenuOpen} onClick={() => navigate("/account")}>
                {username ? (
                  <Typography sx={{ color: "white", fontWeight: "bold" }}>{username}</Typography>
                ) : (
                  <AccountCircle />
                )}
              </IconButton>
           

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          onMouseLeave={handleMenuClose}
          >
          <MenuItem onClick={handleLogout}>Logout</ MenuItem>
         </Menu>
       </Box>
    </Box>
   </Toolbar>
  </AppBar>
        <Box sx={{ flexGrow: 1 }}></Box>
        <Footer />
      </Box>
    </>
  );
};

export default Navbar;