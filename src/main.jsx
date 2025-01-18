// React
import ReactDOM from "react-dom/client";

// Styles
import "./index.css";

// Context

// Authentication
import { Login } from "./components/_01Login.jsx";
import { Signup } from "./components/_02Signup.jsx";
import { AuthComponent } from "./components/_03Auth.jsx";
import { ResetPassword } from "./components/_04ResetPassword.jsx";
import { DeleteUser } from "./components/_05Delete.jsx";

// Methods
import { SaveNumber } from "./components/_11SaveNumber.jsx";
import { RestoreNumber } from "./components/_12RestoreNumber.jsx";
import { DeleteNumber } from "./components/_13DeleteNumber.jsx";
import { RestoreSpecificId } from "./components/_14RestoreSpecificId.jsx";

// View
import { View } from "./components/_21View.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Authentication */}
    <Login />
    <hr />
    <Signup />
    <hr />
    <AuthComponent />
    <hr />
    <ResetPassword />
    <hr />
    <DeleteUser />
    <hr />
    <hr />

    {/* View */}
    <View />
    <hr />
    <hr />

    {/* Methods */}
    <SaveNumber value={2} />
    <hr />
    <RestoreNumber />
    <hr />
    <DeleteNumber />
    <hr />
    <RestoreSpecificId />
    <hr />
    <hr />
  </React.StrictMode>
);
