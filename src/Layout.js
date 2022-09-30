import React from "react";
import DetailPage from "./DetailPage";
import CartPage from "./CartPage";
import "antd/dist/antd.css";

function DetailLayout({}) {
  return (
    <>
      <DetailPage />
      <CartPage />
    </>
  );
}

export default DetailLayout;
