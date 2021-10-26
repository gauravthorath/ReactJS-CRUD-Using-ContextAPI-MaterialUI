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
import { Container, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material";
import { purple } from "@mui/material/colors";
export const MemberContext = createContext([] as any);

const theme = createTheme({
  palette: {
    primary: purple,
  },
  typography: {
    fontFamily: "Quicksand",
  },
});

export default function App(): JSX.Element {
  const [members, setMembers] = useState([
    {
      id: 1,
      firstName: "Rawadi",
      lastName: "Rathod",
      salary: "4000",
    },
    {
      id: 2,
      firstName: "Baburao",
      lastName: "Singham",
      salary: "400001",
    },
  ]);

  return (
    <ThemeProvider theme={theme}>
      <Container>
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
      </Container>
    </ThemeProvider>
  );
}
