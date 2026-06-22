
import {
  Route,
  Switch
} from "wouter";

import AdminLogin
from "./admin/pages/AdminLogin";

import AdminDashboard
from "./admin/pages/AdminDashboard";

import Applications
from "./admin/pages/Applications";

import Payments
from "./admin/pages/Payments";

import Downloads
from "./admin/pages/Downloads";

import AdminApplicationView
from "./admin/pages/AdminApplicationView";

function App() {

  return (

    <Switch>

      <Route
        path="/"
        component={AdminLogin}
      />

      <Route
        path="/dashboard"
        component={AdminDashboard}
      />

      <Route
        path="/applications"
        component={Applications}
      />

      <Route
        path="/payments"
        component={Payments}
      />

      <Route
        path="/downloads"
        component={Downloads}
      />

      <Route
        path="/admin-application/:id"
        component={AdminApplicationView}
      />

    </Switch>

  );

}

export default App;
