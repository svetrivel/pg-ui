import AccountIcon from "@mui/icons-material/AccountCircle";
import Home from "@mui/icons-material/Home";
import { Box, Breadcrumbs, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { PageURL } from "../../Common/Constants";
import Body from "./Body";

function Dashboard() {
  const navigate = useNavigate();
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
            <Typography
              sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}
              color="text.primary"
            >
              <Home sx={{ mr: 0.5 }} fontSize="inherit" />
              Dashboard
            </Typography>
          </Breadcrumbs>
          <Typography
            variant="h1"
            fontWeight={700}
            fontSize="26px"
            lineHeight="1.4"
          >
            Dashboard
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
          Users
        </Typography>
        <Box
          sx={{
            opacity: "1",
            background: "transparent",
            color: "rgb(52, 71, 103)",
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{ display: "flex", flexFlow: "row wrap" }}
          >
            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  minWidth: "0px",
                  overflowWrap: "break-word",
                  borderRadius: "1rem",
                  boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem",
                }}
              >
                <Box
                  sx={{
                    opacity: "1",
                    background: "rgb(255, 255, 255)",
                    color: "rgb(52, 71, 103)",
                  }}
                >
                  <Box sx={{ padding: "16px" }}>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        flexFlow: "row wrap",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={8}>
                        <Box
                          sx={{
                            opacity: "1",
                            lineHeight: "1",
                            marginLeft: "0px",
                            background: "transparent",
                            color: "rgb(52, 71, 103)",
                          }}
                        >
                          <Typography
                            variant="button"
                            textTransform="capitalize"
                          >
                            Total Users
                          </Typography>
                          <Typography variant="h5" fontWeight={700}>
                            53
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <AccountIcon
                          sx={{
                            width: "3rem",
                            height: "3rem",
                            marginLeft: "auto",
                            borderRadius: "0.5rem",
                            color: "#fff",
                            boxShadow:
                              "rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem",
                            background:
                              "linear-gradient(310deg, rgb(20, 23, 39), rgb(58, 65, 111))",
                          }}
                        ></AccountIcon>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  minWidth: "0px",
                  overflowWrap: "break-word",
                  borderRadius: "1rem",
                  boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem",
                }}
                onClick={() => {
                  navigate(PageURL.UserPage);
                }}
              >
                <Box
                  sx={{
                    opacity: "1",
                    background: "rgb(255, 255, 255)",
                    color: "rgb(52, 71, 103)",
                  }}
                >
                  <Box sx={{ padding: "16px" }}>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        flexFlow: "row wrap",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={8}>
                        <Box
                          sx={{
                            opacity: "1",
                            lineHeight: "1",
                            marginLeft: "0px",
                            background: "transparent",
                            color: "rgb(52, 71, 103)",
                          }}
                        >
                          <Typography
                            variant="button"
                            textTransform="capitalize"
                          >
                            2 Sharing Users
                          </Typography>
                          <Typography variant="h5" fontWeight={700}>
                            8
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <AccountIcon
                          sx={{
                            width: "3rem",
                            height: "3rem",
                            marginLeft: "auto",
                            borderRadius: "0.5rem",
                            color: "#fff",
                            boxShadow:
                              "rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem",
                            background:
                              "linear-gradient(310deg, rgb(20, 23, 39), rgb(58, 65, 111))",
                          }}
                        ></AccountIcon>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  minWidth: "0px",
                  overflowWrap: "break-word",
                  borderRadius: "1rem",
                  boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem",
                }}
                onClick={() => {
                  navigate(PageURL.CountryPage);
                }}
              >
                <Box
                  sx={{
                    opacity: "1",
                    background: "rgb(255, 255, 255)",
                    color: "rgb(52, 71, 103)",
                  }}
                >
                  <Box sx={{ padding: "16px" }}>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        flexFlow: "row wrap",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={8}>
                        <Box
                          sx={{
                            opacity: "1",
                            lineHeight: "1",
                            marginLeft: "0px",
                            background: "transparent",
                            color: "rgb(52, 71, 103)",
                          }}
                        >
                          <Typography
                            variant="button"
                            textTransform="capitalize"
                          >
                            3 Sharing Users
                          </Typography>
                          <Typography variant="h5" fontWeight={700}>
                            15
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <AccountIcon
                          sx={{
                            width: "3rem",
                            height: "3rem",
                            marginLeft: "auto",
                            borderRadius: "0.5rem",
                            color: "#fff",
                            boxShadow:
                              "rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem",
                            background:
                              "linear-gradient(310deg, rgb(20, 23, 39), rgb(58, 65, 111))",
                          }}
                        ></AccountIcon>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <Card
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  minWidth: "0px",
                  overflowWrap: "break-word",
                  borderRadius: "1rem",
                  boxShadow: "rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem",
                }}
              >
                <Box
                  sx={{
                    opacity: "1",
                    background: "rgb(255, 255, 255)",
                    color: "rgb(52, 71, 103)",
                  }}
                >
                  <Box sx={{ padding: "16px" }}>
                    <Grid
                      container
                      sx={{
                        display: "flex",
                        flexFlow: "row wrap",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={8}>
                        <Box
                          sx={{
                            opacity: "1",
                            lineHeight: "1",
                            marginLeft: "0px",
                            background: "transparent",
                            color: "rgb(52, 71, 103)",
                          }}
                        >
                          <Typography
                            variant="button"
                            textTransform="capitalize"
                          >
                            4 Sharing Users
                          </Typography>
                          <Typography variant="h5" fontWeight={700}>
                            30
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <AccountIcon
                          sx={{
                            width: "3rem",
                            height: "3rem",
                            marginLeft: "auto",
                            borderRadius: "0.5rem",
                            color: "#fff",
                            boxShadow:
                              "rgb(20 20 20 / 12%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(20 20 20 / 7%) 0rem 0.125rem 0.25rem -0.0625rem",
                            background:
                              "linear-gradient(310deg, rgb(20, 23, 39), rgb(58, 65, 111))",
                          }}
                        ></AccountIcon>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
        <Typography
          variant="h2"
          gutterBottom
          fontWeight={700}
          fontSize="18px"
          style={{ margin: "40px 0 20px 0" }}
        >
          Products
        </Typography>
        <Body />
      </div>
    </React.Fragment>
  );
}

export default Dashboard;
