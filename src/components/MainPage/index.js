import React from "react";
import LeftBar from "../LeftBar/LeftBar";
import Mainpage from "./MainPage";

import "../../App.css";

export default function Homepage() {
  return (
    <>
      <div className="home-container container">
        <LeftBar />
        <Mainpage />
      </div>
    </>
  );
}