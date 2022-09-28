import React from "react";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import axios from "axios";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import AppSettings from "../../AppSettings";

const validationSchema = yup.object({
  name: yup.string("Enter country name").required("Name is required"),
  shortName: yup
    .string("Enter state Short Name")
    .max(3, "State short name should be max of 3 characters")
    .required("Short Name is required"),
});

const StateForm = () => {
  const [formMessage, setFormMessage] = React.useState("");
  const [countries, setCountries] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(AppSettings.BackendHostURL + "api/country")
      .then((res) => setCountries(res.data));
  }, []);

  const formik = useFormik({
    initialValues: {
      name: "",
      shortName: "",
      countryId: 0,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      axios
        .post(AppSettings.BackendHostURL + "api/State", values)
        .then((response) => {
          if (response.data.error) alert(response.data.error);
          if (response.data.message) alert(response.data.message);
          setFormMessage(response.data);
        });
    },
  });

  const handleChange = (event) => {
    console.log(event.target.value);
  };

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
        <InputLabel id="country">Country</InputLabel>
        <Select
          fullWidth
          labelId="country"
          id="countryId"
          name="countryId"
          value={formik.values.countryId}
          label="Country"
          onChange={formik.handleChange}
        >
          <MenuItem key="-1" value="0">
            <em>None</em>
          </MenuItem>
          {countries.map((x) => (
            <MenuItem key={x.id} value={x.id}>
              {x.name}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>
          Select the country where the state resides
        </FormHelperText>

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

export default StateForm;
