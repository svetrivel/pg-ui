import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "shortName", headerName: "Short Name", width: 130 },
];

const baseURL = "http://localhost:5074/api/State";

export default function StateBrowse() {
  const [states, setStates] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseURL).then((res) => {
      setStates(res.data);
    });
  }, []);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={states}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
