import React from "react";
import ReactDOM from "react-dom";
import Layout from "host/Layout";
import { Routes, HashRouter, Route } from "react-router-dom";
import DetailPage from "./DetailPage";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<DetailPage></DetailPage>} />
    </Routes>
  </HashRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
