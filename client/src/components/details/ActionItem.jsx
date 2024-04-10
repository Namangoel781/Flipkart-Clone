import React from "react";
import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}))

const Image = styled('img')({
    padding: '15px 20px',
    width: '90%'
});

const StyledButton = styled(Button)(({ theme}) => ({
    width: '46%',
    borderRadius: 2,
    height: 50,
    color: '#FFF',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}))

const ActionItem = ({ product }) => {
  return (
    <LeftContainer>
    <Image src={product.detailUrl} /><br />
    <StyledButton onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
    <StyledButton onClick={() => buyNow()} style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
</LeftContainer>
  );
};

export default ActionItem;
