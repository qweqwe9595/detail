import React from "react";
import ReactDOM from "react-dom";
import Layout from "host/Layout";
import { Routes, HashRouter, Route } from "react-router-dom";
import DetailPage from "./DetailPage";

const App = () => (
  <Layout/>
);
ReactDOM.render(<App />, document.getElementById("app"));
