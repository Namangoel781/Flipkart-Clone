import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Login from "../login/Login";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButtons = () => {

  const [open,setOpen] = useState(false)

  const { account, setAccount } = useContext(DataContext)

  const openDialog = () => {
    setOpen(true)

  }
  

  return (
    <Wrapper>
      {
        account ? <Profile account={account} /> :
      <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>
      }

      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Container>
      <Login open={open} setOpen={setOpen}/>
    </Wrapper>
  );
};

export default CustomButtons;
