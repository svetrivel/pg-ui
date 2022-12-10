import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { PageURL } from "./Common/Constants";
import AppMainBar from "./Components/Common/AppMainBar";
import Dashboard from "./Components/Dashboard/Index";
import CountryPage from "./Pages/CountryPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import UserListPage from "./Pages/UserListPage";
import UserPage from "./Pages/UserPage";

function App() {
  return (
    <Fragment>
      <AppMainBar />
      <Routes>
        <Route path="/*" element={<Dashboard />} />
        <Route path={PageURL.LoginPage} element={<LoginPage />} />
        <Route path={PageURL.RegisterPage} element={<RegisterPage />} />
        <Route path={PageURL.UserPage + "/*"} element={<UserPage />} />
        <Route path={PageURL.UserPage} element={<UserListPage />} />
        <Route path={PageURL.CountryPage} element={<CountryPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
