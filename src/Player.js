import React from "react";
import Body from "./Body";
import "./Player.css";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

function Player({ melodify }) {
  return (
    <div className="player">
      <div className="player_body">
        <Sidebar />
        <Body melodify={melodify}/>
      </div>

      <Footer />
    </div>
  );
}

export default Player;
