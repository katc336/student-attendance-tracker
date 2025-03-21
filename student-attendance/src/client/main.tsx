import "./index.css";
//React
import React from "react";
import ReactDOM from "react-dom/client";
//Redux
import { Provider } from "react-redux";
import store from "../redux/store";
import App from "./App";
//Browser Router
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//Pages
import HomePage from "./content/Homepage/HomePage";
import CreateAccountPage from "./content/Authorizations/CreateAccountPage/CreatAccount";
import LoginPage from "./content/Authorizations/LoginPage/LoginPage";
import AdminCreateAccountPage from "./content/Authorizations/CreateAccountPage/AdminCreateAccountPage";
import TeacherCreateAccountPage from "./content/Authorizations/CreateAccountPage/TeacherCreateAccounPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create_account" element={<CreateAccountPage />} />
          <Route path="creat_account_admin" element={<AdminCreateAccountPage />}/>
          <Route path="creat_account_teacher" element={<TeacherCreateAccountPage/>}/>
          <Route path="/login_account" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
