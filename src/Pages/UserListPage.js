import AddIcon from "@mui/icons-material/Add";
import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs, Fab, Link, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import { PageURL } from "../Common/Constants";
import UserBrowse from "../Components/User/UserBrowse";

const UserListPage = (prop) => {
  const navigate = useNavigate(false);

  const addNewUserHandler = () => {
    navigate(PageURL.UserPage + "/add");
  };

  return (
    <React.Fragment>
      <header style={{ backgroundColor: "#fff" }}>
        <div
          style={{
            padding: "20px",
            margin: "0 auto",
            maxWidth: "1240px",
            boxSizing: "border-box",
          }}
        >
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Dashboard
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}
              color="text.primary"
            >
              <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Users
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h1"
            fontWeight={700}
            fontSize="26px"
            lineHeight="1.4"
          >
            Users
          </Typography>
        </div>
      </header>
      <div className="container">
        <Typography
          variant="h2"
          gutterBottom
          fontWeight={700}
          fontSize="18px"
          style={{ margin: "40px 0 20px 0" }}
        >
          <GroupIcon sx={{ mr: 1 }} fontSize="inherit" />
          Users
        </Typography>
        <div
          style={{
            display: "flex",
            flexDirection: "row-reverse",
          }}
        >
          <Fab size="medium" color="success" onClick={addNewUserHandler} variant="extended">
            <AddIcon />
            Add a new User
          </Fab>
        </div>
        <UserBrowse />
      </div>
    </React.Fragment>
  );
};

export default UserListPage;
