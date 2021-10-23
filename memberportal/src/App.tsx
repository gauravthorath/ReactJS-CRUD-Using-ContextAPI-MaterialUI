import React, { createContext, useState } from "react";
import "./App.css";
import Addmember from "./components/Addmember";
import Editmember from "./components/Editmember";
import Viewmember from "./components/Viewmember";
import Memberlist from "./components/Memberlist";
import Form from "./components/extra/Form/Form";
import useStateHook from "./components/extra/Form/useStateHook";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import classComponentFetchData from "./components/extra/classComponentFetchData";
import { Typography } from "@mui/material";
export const MemberContext = createContext([] as any);

export default function App() {
  const [members, setMembers] = useState([
    {
      firstName: "Rawadi",
      lastName: "Rathod",
      salary: "4000",
    },
    {
      firstName: "Baburao",
      lastName: "Singham",
      salary: "400001",
    },
  ]);

  return (
    <div className="App">
      <MemberContext.Provider value={{ members, setMembers }}>
        <Typography
          variant="h2"
          component="h4"
          color="primary"
          gutterBottom
          align="center"
        >
          Member Portal
        </Typography>
        <Router>
          <Switch>
            <Route path="/addmember" component={Addmember} />
            <Route path="/editmember" component={Editmember} />
            <Route path="/viewmember" component={Viewmember} />
            <Route path="/memberlist" component={Memberlist} />
            <Route path="/form" component={Form} />
            <Route path="/useStateHook" component={useStateHook} />
            <Route path="/fetchData" component={classComponentFetchData} />
            <Route path="/" exact component={Memberlist} />
          </Switch>
        </Router>
      </MemberContext.Provider>
    </div>
  );
}
