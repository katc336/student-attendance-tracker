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
import HomePage from "./components/Homepage/HomePage";
import CreateAccountPage from "./components/Homepage/Authorizations/CreateAccountPage/CreatAccount";
import LoginPage from "./components/Homepage/Authorizations/LoginPage/LoginPage";
import AdminCreateAccountPage from "./components/Homepage/Authorizations/CreateAccountPage/AdminCreateAccountPage";
import TeacherCreateAccountPage from "./components/Homepage/Authorizations/CreateAccountPage/TeacherCreateAccounPage";
import AdminHomePage from "./components/AdminPage/AdminHomepage";
import TeacherHomePage from "./components/TeacherPage/TeacherHomePage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create_account" element={<CreateAccountPage />} />
          <Route path="creat_account_admin" element={<AdminCreateAccountPage />} />
          <Route path="creat_account_teacher" element={<TeacherCreateAccountPage />} />
          <Route path="/login_account" element={<LoginPage />} />
          <Route path="/admin_home" element={<AdminHomePage />} />
          <Route path="/teacher_home" element={<TeacherHomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
