// React
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./index.css";

// Context
import { MyProvider } from "./context/provider.jsx";
import { Context } from "./components/_00Context.jsx";

// Authentication
import { Login } from "./components/_01Login.jsx";
import { Signup } from "./components/_02Signup.jsx";
import { AuthComponent } from "./components/_03Auth.jsx";
import { ResetPassword } from "./components/_04ResetPassword.jsx";
import { DeleteUser } from "./components/_05Delete.jsx";
import { Logout } from "./components/_06Logout.jsx";
import { UserData } from "./components/_07UserData.jsx";
import { Token } from "./components/_08Token.jsx";
import { UpdateProfile } from "./components/_09UpdateProfile.jsx";
import { VerifyPhoneNumber } from "./components/_10VerifyPhoneNumber.jsx";

// View
import { View } from "./components/_21View.jsx";

// Methods
import { SaveNumber } from "./components/_51SaveNumber.jsx";
import { RestoreNumber } from "./components/_52RestoreNumber.jsx";
import { DeleteNumber } from "./components/_53DeleteNumber.jsx";
import { RestoreSpecificId } from "./components/_54RestoreSpecificId.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MyProvider>
      {/* Context */}
      <Context />
      <hr />
      <hr />

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
      <Logout />
      <hr />
      <UserData />
      <hr />
      <Token />
      <hr />
      <UpdateProfile />
      <hr />
      <VerifyPhoneNumber />
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
    </MyProvider>
  </React.StrictMode>
);
