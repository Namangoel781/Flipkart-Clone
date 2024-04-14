import React from "react";
import { useSelector } from "react-redux";
import { Typography, Grid, Box, styled, Button } from "@mui/material";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import Stripecheckout from "./StripeCheckout";

const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md")]: {
    padding: "15px 0",
  },
}));

const Header = styled(Box)`
  padding: 15px 24px;
  background-color: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background-color: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background-color: #fb641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: 15,
  [theme.breakpoints.down("md")]: {
    marginBottom: 15,
  },
}));

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems?.length ? (
        <Container container>
          <LeftComponent item lg={9} md={12} sm={12} xs={12}>
            <Header>
              <Typography>My Cart ({cartItems?.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrapper>
              <Stripecheckout
                name="Your Store Name"
                description={400}
                amount={400 * 100}
                token={100}
                stripeKey="pk_test_51P53ekSBxNuVy4c2eNt1BgXgrAEPFaVjexPUrDs4iaTvSVoxQ9QlPtS0vpisJufZFLbPkSlanybufwXocQf78uhn00KXouJiqv"
                currency="INR"
                billingAddress
                shippingAddress
              />
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
