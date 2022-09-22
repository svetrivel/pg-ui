import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";
import IconButton from "@mui/material/IconButton";
import { useNavigate } from "react-router-dom";

export default function SideMenu(prop) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navigate = useNavigate();

  const menuItems = [
    {
      text: "Home",
      icon: "home",
      onClick: () => {
        navigate("/Home");
      },
    },
    {
      text: "Log In",
      icon: "login",
      onClick: () => {
        navigate("/Login");
      },
    },
    {
      text: "Sign Up",
      icon: "subscriptions",
      onClick: () => {
        navigate("/register");
      },
    },
  ];
  const subMenuItems = [
    {
      text: "Users",
      icon: "people",
      onClick: () => {
        navigate("/Users");
      },
    },
  ];
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map(({ text, icon, onClick }, index) => (
          <ListItem key={text} disablePadding button onClick={onClick}>
            <ListItemButton>
              <ListItemIcon>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {subMenuItems.map(({ text, icon, onClick }, index) => (
          <ListItem key={text} disablePadding button onClick={onClick}>
            <ListItemButton>
              <ListItemIcon>
                <Icon>{icon}</Icon>
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <React.Fragment key={prop.anchor}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
        onClick={toggleDrawer(prop.anchor, true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor={prop.anchor}
        open={state[prop.anchor]}
        onClose={toggleDrawer(prop.anchor, false)}
      >
        {list(prop.anchor)}
      </Drawer>
    </React.Fragment>
  );
}
