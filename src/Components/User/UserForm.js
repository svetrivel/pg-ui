import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PendingIcon from "@mui/icons-material/AccessTimeFilled";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import AppSettings from "../../AppSettings";
import { Alert, Snackbar } from "@mui/material";
import { ResponseType } from "../../Common/Constants";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required"),
  phoneNumber: yup
    .string("Enter your Phone Number")
    .length(10, "Phone Number should have 10 digits only")
    .required("Phone Number is required")
    .matches(
      "[0-9]{10}",
      "Entered Phone number is invalid (Phone Number should have only numeric digits)"
    ),
  firstName: yup
    .string("Enter your First Name")
    .min(3, "First Name should be of minimum 3 characters length")
    .max(40, "First Name should be of maximum 40 characters length")
    .required("First Name is required"),
});

const UserForm = () => {
  const navigate = useNavigate();
  const [userResponse, setUserResponse] = useState({type:'', message: '', open : false});

  const closeToastMessage = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setUserResponse({...userResponse, open : false });
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      company: "",
      address: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post(AppSettings.BackendHostURL + "api/user/register", values)
        .then(res => {setUserResponse({type:ResponseType.Success.toLowerCase(), message: res.data.Message, open: true}); console.log(res)})
        .catch(error => setUserResponse({type:ResponseType.Error.toLowerCase(), message: error.response.data.message || 'Something went wrong', open: true}));
      //navigate("/users");
    },
  });

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 1 },
        paddingTop: "20px",
        backgroundColor: "#fff",
        margin: "10px",
        borderRadius: "3px",
        padding: "5px",
      }}
    >
      { userResponse.message.length > 0 &&
      <Snackbar open={userResponse.open} autoHideDuration={6000} onClose={closeToastMessage} anchorOrigin={{ vertical : 'top', horizontal:'center' }}>
        <Alert severity={userResponse.type} variant="filled" onClose={closeToastMessage}>
           <Typography variant="body1" gutterBottom>
            {userResponse.message}
          </Typography>
        </Alert>
      </Snackbar>      
      }
      <form onSubmit={formik.handleSubmit} autoComplete="off">
        <div style={{ display: "grid", gridTemplateColumns: "50% 50%" }}>
          <fieldset style={{ border: "none", maxWidth: "350px" }}>
            <TextField
              fullWidth
              id="firstName"
              name="firstName"
              label="First Name"
              required="Please enter First Name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              error={
                formik.touched.firstName && Boolean(formik.errors.firstName)
              }
              helperText={formik.touched.firstName && formik.errors.firstName}
            />
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last Name"
              value={formik.values.lastName}
              onChange={formik.handleChange}
              error={formik.touched.lastName && Boolean(formik.errors.lastName)}
              helperText={formik.touched.lastName && formik.errors.lastName}
            />
          </fieldset>
          <fieldset style={{ border: "none", maxWidth: "350px" }}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              required
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="Phone Number"
              required="Please enter Phone Number"
              value={formik.values.phoneNumber}
              placeholder="Enter your phone number"
              title="Enter your phone number"
              onChange={formik.handleChange}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
            />
            <TextField
              fullWidth
              id="staus"
              label="Status"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PendingIcon color="primary" />
                  </InputAdornment>
                ),
              }}
              disabled
              value="Pending"
              variant="filled"
            />
          </fieldset>
        </div>
        <Divider textAlign="left">
          <Chip label="Professional Details" />
        </Divider>
        <fieldset style={{ border: "none", maxWidth: "350px" }}>
          <TextField
            fullWidth
            id="company"
            name="company"
            label="Organisation Name"
            title="Enter Company Name Or College Name"
            placeholder="Enter Company Name Or College Name"
            value={formik.values.company}
            onChange={formik.handleChange}
            error={formik.touched.company && Boolean(formik.errors.company)}
            helperText={formik.touched.company && formik.errors.company}
          />
        </fieldset>
        <Button color="success" variant="contained" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default UserForm;
