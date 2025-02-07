import React from "react";
import { Box, Button, Typography } from "@mui/material";

// Import images from assets
import mobileImg from "../assets/mobile_cat.jpg";
import fashionImg from "../assets/fashion.png";
import electronicsImg from "../assets/Electronics.png";
import homeImg from "../assets/home.png";
import appliancesImg from "../assets/Appliance.png";
import beautyImg from "../assets/lipstics.png";
import groceryImg from "../assets/Grocery.jpg";
import toysImg from "../assets/Teddy.jpg";

const categories = [
  { name: "Mobiles", image: mobileImg },
  { name: "Fashion", image: fashionImg },
  { name: "Electronics", image: electronicsImg },
  { name: "Home", image: homeImg },
  { name: "Appliances", image: appliancesImg },
  { name: "Beauty", image: beautyImg },
  { name: "Grocery", image: groceryImg },
  { name: "Toys", image: toysImg },
];

const CategoryBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: "10px 0",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      {categories.map((category) => (
        <Button
          key={category.name}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textTransform: "none",
            fontWeight: "bold",
            fontSize: "14px",
            color: "#333",
            "&:hover": { color: "#2874f0" },
          }}
        >
          <img
            src={category.image}
            alt={category.name}
            style={{ width: "40px", height: "40px", marginBottom: "5px" }}
          />
          <Typography variant="body2">{category.name}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default CategoryBar;
