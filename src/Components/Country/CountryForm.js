import { Alert } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import AppSettings from "../../AppSettings";
import { ResponseType } from "../../Common/Constants";

const validationSchema = yup.object({
  name: yup.string("Enter country name").required("Name is required"),
  shortName: yup
    .string("Enter country Short Name")
    .max(3, "Country short name should be max of 3 characters")
    .required("Short Name is required"),
});

const baseURL = AppSettings.BackendHostURL + "api/Country";

const CountryForm = (prop) => {
  const [formMessage, setFormMessage] = React.useState({
    type: "",
    message: "",
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      shortName: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post(baseURL, values)
        .then((response) => {
          setFormMessage({
            type: ResponseType.Success.toLowerCase(),
            message: response.data.Message,
          });

          if (prop.onCreate) prop.onCreate();
        })
        .catch((error) => {
          setFormMessage({
            type: ResponseType.Error.toLowerCase(),
            message: error.response.data.message,
          });
        });
    },
  });

  return (
    <React.Fragment>
      {formMessage.message.length > 0 && (
        <Alert sx={{ marginBottom: "15px" }} severity={formMessage.type} variant="outlined">
          {formMessage.message}
        </Alert>
      )}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
          },
          backgroundColor: "white",
        }}
      >
        <form
          onSubmit={formik.handleSubmit}
          autoComplete="off"
          style={{ display: "contents" }}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{ margin: "8px" }}
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
            sx={{ margin: "8px" }}
          />
          <Button color="primary" variant="contained" fullWidth type="submit">
            Submit
          </Button>
        </form>
      </Box>
    </React.Fragment>
  );
};

export default CountryForm;
