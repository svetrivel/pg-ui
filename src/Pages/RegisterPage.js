import GroupIcon from "@mui/icons-material/Group";
import HomeIcon from "@mui/icons-material/Home";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import "../App.css";
import { PageURL } from "../Common/Constants";
import UserForm from "../Components/User/UserForm";

const RegisterPage = (prop) => {
  const [reloadPage, setReloadPage] = useState(false);

  const onCountryCreate = () => {
    console.log(reloadPage);
    setReloadPage((prevState) => {
      return prevState ? false : true;
    });
    console.log("after", reloadPage);
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
            <Link
              underline="hover"
              sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}
              color="inherit"
              href={PageURL.UserPage}
            >
              <GroupIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Users
            </Link>
            <Typography
              sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}
              color="text.primary"
            >
              <PersonAddIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Sign up
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h1"
            fontWeight={700}
            fontSize="26px"
            lineHeight="1.4"
          >
            User Registration
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
          <PersonAddIcon sx={{ mr: 1 }} fontSize="inherit" />
          Create a user
        </Typography>
        <UserForm onCreate={onCountryCreate} />
      </div>
    </React.Fragment>
  );
};

export default RegisterPage;
