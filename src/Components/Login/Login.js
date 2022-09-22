import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Box from "@mui/material/Box";
import { height } from "@mui/system";
import axios from "axios";
import { Typography } from "@mui/material";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    //.email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(3, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const baseURL = "http://localhost:5074/api/User/Login";

const Login = (prop) => {
  const loginUser = (loginData) => {
    axios
      .post(baseURL, {
        userName: loginData.email,
        password: loginData.password,
      })
      .then((res) => console.log(res.data));
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginUser(values);
      if (prop.onSubmit) alert("No external submit ofund");
      else prop.onSubmit(values);
    },
  });

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1 },
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        paddingTop: "40px",
      }}
      autoComplete="off"
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          width: "500px",
          textAlign: "center",
        }}
      >
        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Typography align="center">OR</Typography>
        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button color="success" variant="contained" type="submit">
          <Fingerprint />
          Login
        </Button>
      </form>
    </Box>
  );
};

export default Login;
