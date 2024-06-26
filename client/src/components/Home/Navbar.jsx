import { Box, Typography } from "@mui/material";
import { navData } from "../constants/data.js";
import React from "react";
import { styled } from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "55px 130px 0 130px",
  justifyContent: "space-between",
  overflow: "overlay",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
  },
}));
const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;
const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Navbar = () => {
  return (
    <Box style={{ backgroundColor: "#fff" }}>
      <Component>
        {navData.map((data) => (
          <Container>
            <img src={data.url} alt="nav" style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Container>
        ))}
      </Component>
    </Box>
  );
};

export default Navbar;
