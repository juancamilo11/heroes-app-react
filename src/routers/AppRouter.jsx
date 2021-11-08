import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";
import LoginScreen from "../pages/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  console.log(user);

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginScreen} />
          <PrivateRoute
            isAuthenticated={user.logged}
            path="/"
            component={DashboardRoutes}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
