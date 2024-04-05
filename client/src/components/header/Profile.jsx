import styled from "@emotion/styled";
import { Box, Menu, Typography, MenuItem } from "@mui/material";
import { useState, useContext } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { DataContext } from "../../context/DataProvider";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = () => {
  const { account, setAccount } = useContext(DataContext);

  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setAccount("");
  };

  return (
    <>
      <Box onClick={handleClick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logoutUser();
          }}
        >
          <LogoutIcon color="primary" fontSize="small" />
          <Logout>Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
