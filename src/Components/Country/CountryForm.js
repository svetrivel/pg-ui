import React from "react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Dialog, DialogContent, DialogTitle } from "@mui/material";

const validationSchema = yup.object({
  name: yup.string("Enter country name").required("Name is required"),
  shortName: yup
    .string("Enter country Short Name")
    .max(3, "Country short name should be max of 3 characters")
    .required("Short Name is required"),
});

const baseURL = "http://localhost:5074/api/Country";

const CountryForm = () => {
  const [formMessage, setFormMessage] = React.useState("");

  const formik = useFormik({
    initialValues: {
      name: "",
      shortName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios.post(baseURL, values).then((response) => {
        if (response.data.error) alert(response.data.error);
        if (response.data.message) alert(response.data.message);
        setFormMessage(response.data);
      });
    },
  });

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
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextField
          fullWidth
          id="shortName"
          name="shortName"
          label="Short Name"
          value={formik.values.shortName}
          onChange={formik.handleChange}
          error={formik.touched.shortName && Boolean(formik.errors.shortName)}
          helperText={formik.touched.shortName && formik.errors.shortName}
        />
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
      {/* <Dialog open={formMessage.message}>
        <DialogTitle>Response</DialogTitle>
        <DialogContent>
          <Paper>{formMessage}</Paper>
        </DialogContent>
      </Dialog> */}
    </Box>
  );
};

export default CountryForm;
