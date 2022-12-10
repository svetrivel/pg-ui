import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import CountryBrowse from "../Components/Country/CountryBrowse";
import CountryForm from "../Components/Country/CountryForm";
import  '../App.css'

const CountryPage = (prop) => {
  const [reloadPage, setReloadPage] = useState(false);

  const onCountryCreate = () => {
    setReloadPage((prevState) => {
      return prevState ? false : true;
    });
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
              <PublicIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Country
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h1"
            fontWeight={700}
            fontSize="26px"
            lineHeight="1.4"
          >
            Country
          </Typography>
        </div>
      </header>
      <div className="container">
        <main
          style={{
            display: "grid",
            gap: "40px",
            gridTemplateColumns: "repeat(2,1fr)",
            paddingBottom: "10px",
          }}
        >
          <section>
            <Typography
              variant="h2"
              gutterBottom
              fontWeight={700}
              fontSize="18px"
              style={{ margin: "40px 0 20px 0" }}
            >
              Create a country
            </Typography>
            <CountryForm onCreate={onCountryCreate} />
          </section>
          <section style={{ width: "500px", height: "500px" }}>
            <Typography
              variant="h2"
              gutterBottom
              fontWeight={700}
              fontSize="18px"
              style={{ margin: "40px 0 20px 0" }}
            >
              Countries
            </Typography>
            <CountryBrowse sort="desc" key={reloadPage} />
          </section>
        </main>
      </div>
    </React.Fragment>
  );
};

export default CountryPage;
