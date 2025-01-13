import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { Login } from "./components/_01Login.jsx";
import { Signup } from "./components/_02Signup.jsx";
import { AuthComponent } from "./components/_03Auth.jsx";
import { SaveNumber } from "./components/_04SaveNumber.jsx";
import { RestoreNumber } from "./components/_05RestoreNumber.jsx";
import { DeleteNumber } from "./components/_06DeleteNumber.jsx";
import { RestoreSpecificId } from "./components/_07RestoreSpecificId.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
    <hr />
    <Signup />
    <hr />
    <AuthComponent />
    <hr />
    <SaveNumber value={2} />
    <hr />
    <RestoreNumber />
    <hr />
    <DeleteNumber />
    <hr />
    <RestoreSpecificId />
    <hr />
  </React.StrictMode>
);
