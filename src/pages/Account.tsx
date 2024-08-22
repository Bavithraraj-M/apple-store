import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import SignUpForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Account() {
  const [SignUpFormOpen, setSignUpFormOpen] = useState(false);
  const [loginFormOpen, setloginFormOpen] = useState(false);

  const handleLoginFormOpen = () => {
    setloginFormOpen(true);
  };

  const handleLoginFormClose = () => {
    setloginFormOpen(false);
  };

  const handleSignUpFormOpen = () => {
    setSignUpFormOpen(true);
  };

  const handleSignUpFormClose = () => {
    setSignUpFormOpen(false);
  };
  const handleSignUpFormSubmit = (data : any) => {
    console.log(data); 
    handleSignUpFormClose(); 
  };
  const handleLoginFormSubmit = (data : any) => {
    console.log(data); 
    handleLoginFormClose(); 
  };

  return (
    <>
    <Box sx={{display:"flex"}}>
      <Card sx={{ display:"flex", flexDirection:"column",justifyContent:"center ",height:150 ,width: 345, margin: "auto", marginTop: 5 }}>
        <CardContent sx={{textAlign:"center"}}>
        <Typography variant="h5" sx={{ marginBottom: "1.5rem" }}>Sign up to Apple Store</Typography>
          <Button  variant="contained" color="primary" onClick={handleSignUpFormOpen}>
            Sign Up
          </Button>
        </CardContent>
      </Card>
      <Card sx={{ display:"flex", flexDirection:"column",justifyContent:"center ", height:150 ,width: 345, margin: "auto", marginTop: 5 }}>
        <CardContent sx={{textAlign:"center"}}>
        <Typography variant="h5" sx={{ marginBottom: "1.5rem" }}>Login to Apple Store</Typography>
          <Button  variant="contained" color="primary" onClick={handleLoginFormOpen}>
            Login
          </Button>
        </CardContent>
      </Card>
      </Box>
      <Dialog open={SignUpFormOpen} onClose={handleSignUpFormClose} maxWidth="sm" fullWidth>
        <DialogTitle>Sign Up</DialogTitle>
        <DialogContent>
          <SignUpForm onSubmit={handleSignUpFormSubmit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSignUpFormClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={loginFormOpen} onClose={handleLoginFormClose} maxWidth="sm" fullWidth>
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <LoginForm onSubmit={handleLoginFormSubmit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLoginFormClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}