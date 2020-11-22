import React from "react";
import configRoutes from "../../config/routes";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "../../config/routes";

function privateRoute(props) {
  // const role = props.role || "guest";
  const role = props.role || "g";
  const allowedRoutes = configRoutes[role].allowedRoutes;
  const redirectRoute = configRoutes[role].redirectionRoutes;
  console.log("allowedRoutes", allowedRoutes);
  console.log("redirectRoute", redirectRoute);
  return (
    <Switch>
      {allowedRoutes.map((route) => (
        <Route
          path={route.url}
          key={route.url}
          exact
          // component={route.component}
        >
          <route.component setRole={props.setRole} />
        </Route>
      ))}
      {/* <Redirect to={"/home"} /> */}
      <Redirect to={redirectRoute} />
    </Switch>
  );
}

export default privateRoute;
