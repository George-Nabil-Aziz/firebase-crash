import ReactDOM from "react-dom/client";
import "./index.css";

import { Login } from "./components/_01Login.jsx";
import { AuthComponent } from "./components/_02Auth.jsx";
import { SaveNumber } from "./components/_03SaveNumber.jsx";
import { RestoreNumber } from "./components/_04RestoreNumber.jsx";
import { DeleteNumber } from "./components/_05DeleteNumber.jsx";
import { RestoreSpecificId } from "./components/_06RestoreSpecificId.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Login />
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
