import React from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { Icon } from "@mui/material";
import People from "@mui/icons-material/People";
import AppSettings from "../../AppSettings";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "userName", headerName: "UserName", width: 130 },
  { field: "email", headerName: "Email", width: 130 },
];

const UserBrowse = () => {
  const [users, setUsers] = React.useState([
    { id: 122, userName: "13qqweq", email: "awdqweq@adasdas.sda" },
    { id: 123, userName: "13qqweq", email: "awdqweq@adasdas.sda" },
    { id: 125, userName: "13qqweq", email: "awdqweq@adasdas.sda" },
  ]);

  React.useEffect(() => {
    axios.get(AppSettings.BackendHostURL + "api/user/users").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
        },
      }}
    >
      {users.map((x) => (
        <Card sx={{ maxWidth: 345 }} key={x.id}>
          <CardContent>
            <Grid alignItems={"flex-start"}>
              <Icon>{"account_circle"}</Icon>
              <Typography>{x.firstName+' '+ (x.lastName||'')}</Typography>
              <Typography>{x.email}</Typography>
              <Typography>{x.userName}</Typography>
            </Grid>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default UserBrowse;
