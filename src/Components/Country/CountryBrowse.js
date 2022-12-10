import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import * as React from "react";

const columns = [
  { field: "id", headerName: "ID", width: "150" },
  { field: "name", headerName: "Name", width: "150" },
  { field: "shortName", headerName: "Short Name", width: "150" },
];

const baseURL = "http://localhost:5074/api/Country";

export default function CountryBrowse(prop) {
  const [countries, setCountries] = React.useState([]);
  const [pageSize, setPageSize] = React.useState(5);

  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      setCountries(res.data);
    });
  }, []);

  return (
    <DataGrid
      rows={countries}
      columns={columns}
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5,15,30]}
      pagination
      checkboxSelection 
      initialState={{
        sorting: {
          sortModel: [
            {
              field: 'id',
              sort:  prop.sort || 'asc',
            },
          ],
        },
      }}
   />
  );
}
