import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation.jsx";
import { Provider } from "react-redux";
import store from "../store/store.js";

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
      <Navigation />
      <main>
        <Outlet />
      </main>
      </Provider>
    </>
  );
};

export default RootLayout;
