import React from "react";
import { Box, Typography, TextField, styled, Button } from "@mui/material";

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: #fff;
  height: 48px;
  border-radius: 2px;
`;

const FormPage = () => {
  return (
    <Component>
      <Wrapper>
        <TextField
          variant="standard"
          onChange={(e) => onInputChange(e)}
          name="Full Name"
          label="Enter FullName"
        />
        <TextField
          variant="standard"
          onChange={(e) => onInputChange(e)}
          name="Email"
          label="Enter Email"
        />
        <TextField
          variant="standard"
          onChange={(e) => onInputChange(e)}
          name="Phone"
          label="Enter Phone"
        />
        <TextField
          variant="standard"
          onChange={(e) => onInputChange(e)}
          name="Address1"
          label="Enter Address"
        />
        <TextField
          variant="standard"
          onChange={(e) => onInputChange(e)}
          name="Pin Code"
          label="Enter PinCode"
        />

        <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
      </Wrapper>
    </Component>
  );
};

export default FormPage;
