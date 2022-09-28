import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Box from "@mui/material/Box";
import axios from "axios";
import { Typography } from "@mui/material";
import AppSettings from "../../AppSettings";
import { Instagram } from "@mui/icons-material";
import { Stack } from "@mui/system";

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

const Login = (prop) => {
  const [loginMessage, setLoginMessage] = useState({ type: "", message: "" });

  const loginUser = (loginData) => {
    axios
      .post(AppSettings.BackendHostURL + "api/User/Login", {
        email: loginData.email,
        password: loginData.password,
      })
      .then((res) => setLoginMessage({ type: "Success", message: res.data }))
      .catch((error) => {
        //console.log(error);
        setLoginMessage({ type: "Error", message: error.response.data.error });
      });
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      loginUser(values);
    },
  });

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1 },
        width: "350px",
        backgroundColor: "#fff",
        padding: "10px 40px",
        borderRadius: "10px",
      }}
      autoComplete="off"
    >
      <form
        onSubmit={formik.handleSubmit}
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1}
          style={{ margin: "12px 0 12px 0" }}
        >
          <Instagram color="primary" style={{ fontSize: "50px" }} />
          <Typography>Instagram</Typography>
        </Stack>
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
        <Button
          color="success"
          variant="contained"
          type="submit"
          style={{ marginTop: "10px" }}
        >
          <Fingerprint />
          Login
        </Button>
      </form>
      {loginMessage.message.length > 0 && (
        <Typography color={loginMessage.type === "Error" ? "red" : "green"}>
          {loginMessage.message}
        </Typography>
      )}
    </Box>
  );
};

export default Login;
