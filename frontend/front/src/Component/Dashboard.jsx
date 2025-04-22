import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container,Typography, Button } from "@mui/material";

export default function Dashboard(){
  const [user,setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if(!storedUser){
      navigate("/login");
    }else{
      setUser(storedUser);
    }
  },[]
);

const handleLogout = () => {
  localStorage.removeItem("loggedInUser");
  navigate("/login");
};

return (
  <Container>
    <Typography variant="h3" sx={{mt: 5}}>Welcome,{user?.username}!</Typography>
    <Typography variant="h6" sx={{mt:2}}>You have successfully loged in.</Typography>
    <Button onClick={handleLogout} variant="conatined" color="secondary" sx={{mt :3}}>Logout</Button>
  </Container>
)
}