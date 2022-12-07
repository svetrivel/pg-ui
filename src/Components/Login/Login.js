import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Box from "@mui/material/Box";
import axios from "axios";
import { Alert, Snackbar, Typography } from "@mui/material";
import AppSettings from "../../AppSettings";
import { Instagram } from "@mui/icons-material";
import { Stack } from "@mui/system";
import { ResponseType } from "../../Common/Constants";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string("Enter your password")
    .min(3, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

const Login = (prop) => {
  const [loginMessage, setLoginMessage] = useState({ type: "", message: "", open: false });

  const closeToastMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setLoginMessage({...loginMessage, open : false });
  };

  const navigate = useNavigate();

  const loginUser = (loginData) => {
    axios
      .post(AppSettings.BackendHostURL + "api/User/Login", {
        email: loginData.email,
        password: loginData.password,
      })
      .then((res) => {
        setLoginMessage({ type: ResponseType.Success.toLowerCase(), message: res.data.message, open: true });        

        setTimeout(() => {
          if(prop.onSuccessfulLogin)
            prop.onSuccessfulLogin();
          navigate('/');
        }, 1500);        
    })
      .catch((error) => {
        //console.log(error);
        setLoginMessage({ type: ResponseType.Error.toLowerCase(), message: error.response.data.message, open: false});
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
        boxShadow:"0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);"
      }}
      autoComplete="off"
    >
    { loginMessage.open && 
    <Snackbar open={loginMessage.open} autoHideDuration={6000} onClose={closeToastMessage} anchorOrigin={{ vertical : 'top', horizontal:'center' }}>
        <Alert severity={loginMessage.type} variant="filled" onClose={closeToastMessage}>
           <Typography variant="body1" gutterBottom>
            {loginMessage.message}
          </Typography>
        </Alert>
    </Snackbar>    
    }
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
      {loginMessage.message.length > 0 && loginMessage.type === ResponseType.Error.toLowerCase() && (
        <Alert sx={{width:"322px",marginBottom:"15px"}} severity={loginMessage.type}>
          {loginMessage.message}
        </Alert>
      )}
      <form
        onSubmit={formik.handleSubmit}
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
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
          style={{ margin: "6px 0" }}
        >
          <Fingerprint />
          Login
        </Button>
      </form>      
    </Box>
  );
};

export default Login;
