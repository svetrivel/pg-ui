import React from "react";
import CountryBrowse from "../Country/CountryBrowse";
import StateBrowse from "../State/StateBrowse";
import StateForm from "../State/StateForm";
import Body from "./Body";

function Dashboard() {
  return (
    <React.Fragment>
      <Body />
      <CountryBrowse />
      <StateBrowse />
      <StateForm />
    </React.Fragment>
  );
}

export default Dashboard;
