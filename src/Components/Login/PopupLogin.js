import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Login from "./Login";
import { styled } from "@mui/material/styles";
import { green } from "@mui/material/colors";

export default function PopupLogin(prop) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const LoginButton = styled(Button)(({ theme }) => ({
    color: "white",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
    textTransform: "upper",
    fontSize: 16,
  }));

  return (
    <React.Fragment>
      <LoginButton variant="outlined" onClick={handleClickOpen} color="success">
        Login
      </LoginButton>

      <Dialog open={open} onClose={handleClose}>
        <Login onSuccessfulLogin= {handleClose}/>
      </Dialog>
    </React.Fragment>
  );
}
