import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import AppSettings from "../../AppSettings";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "name", headerName: "Name", width: 130 },
  { field: "shortName", headerName: "Short Name", width: 130 },
];

export default function StateBrowse() {
  const [states, setStates] = React.useState([]);

  React.useEffect(() => {
    axios.get(AppSettings.BackendHostURL + "api/state").then((res) => {
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
