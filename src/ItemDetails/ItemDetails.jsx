import React from "react";
import "./itemdetails.css";
import { Link } from "react-router-dom";
const ItemDetails = () => {
  const currentUrl = window.location.href;
  console.log(currentUrl.split("/")[4]);
  return (
    <div>
      <h1>HELLO WORLD</h1>
      <Link to="/recipe">go back</Link>
    </div>
  );
};

export default ItemDetails;
