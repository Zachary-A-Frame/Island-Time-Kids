import React from "react";

import Philosophy from "./Philosophy";
import About from "./About";
import Camp from "./Camp";
import CampInfo from "./CampInfo"

import Header from "./Header"

import "../styles/IslandTime.css";

function IslandTime() {
  return (
      <>
        <Header />
        <Philosophy />
        <div className="bottom-background"/>
        <About />
        <div className="camp-background"/>
      <Camp />
      <CampInfo />
      </>
  );
}

export { IslandTime as default };
