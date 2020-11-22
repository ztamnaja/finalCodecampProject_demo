import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Router } from "react-router-dom";
import App from "./App";
// import CreateInitItem from "./components/createInitItem";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  //   {/* <CreateInitItem /> */}
  // </React.StrictMode>,

  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
serviceWorker.unregister();
