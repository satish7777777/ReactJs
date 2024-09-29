import React from "react";
import { Link } from "react-router-dom";
import { getAllData } from "../../../HotelService/Api";
import Sidebar from "../ResponsiveDrawer";

function Home() {
  return (
    <div>
      <Link to={{ pathname: "/roomtype/" }}>
        <button>Room Types</button>
        <br />
      </Link>
      <Link to={{ pathname: "/room/" }}>
        <button>Room</button>
      </Link>
    </div>
  );
}

export default Home;
