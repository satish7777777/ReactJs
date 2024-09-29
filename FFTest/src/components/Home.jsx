import React from "react";
import { Link } from "react-router-dom";


function Home() {
  return (
    <div>
     
      <Link to={{ pathname: "/room/" }}>
        <button>Room</button>
        <br />
      </Link>
      <Link to={{ pathname: "/roomservices/" }}>
        <button>Room Services</button>
        <br />
      </Link>
      <Link to={{ pathname: "/report/" }}>
        <button>Reports</button>
        <br />
      </Link>
    </div>
  );
}

export default Home;