import Dashboard from "./Components/Dashboard/Index";
import Login from "./Components/Login/Login";
import AppMainBar from "./Components/Common/AppMainBar";
import { Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import UserForm from "./Components/User/UserForm";
import UserBrowse from "./Components/User/UserBrowse";

function App() {
  return (
    <Fragment>
      <AppMainBar />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<UserForm />} />
        <Route path="/Users" element={<UserBrowse />} />
      </Routes>
    </Fragment>
  );
}

export default App;
