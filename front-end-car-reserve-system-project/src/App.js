import React, { useState } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import PrivateRoutes from "./components/provate-routes/privateRoute";
import LocalStorageService from "./services/localStorage";

function App() {
  // const [role, setRole] = useState("guest");
  const [role, setRole] = useState(LocalStorageService.getRole());
  return (
    <div className="App">
      <Switch>
        <PrivateRoutes role={role} setRole={setRole} />
        {/* <PrivateRoute role='guest' /> */}
      </Switch>
    </div>
  );
}

export default App;
