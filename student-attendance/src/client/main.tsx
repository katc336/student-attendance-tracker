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

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Routes>
        <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
