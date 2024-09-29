import React from "react";
import { useContext } from "react";
import { contextData } from "../Context/Context";
import { Link } from "react-router-dom";

function Cart() {
  const {posts} = useContext(contextData);
  const cartData =posts
  //console.log("cart", cartData);
  return (
    <div
      className="container p-4"
      style={{ fontFamily: "serif", fontSize: "20px" }}
    >
      <h1>Explore Your Dream Travel Place</h1>
      <div className="row">
        {cartData.map((element) => (
          <div key={element.id} className="col-md-4 mb-3">
            <Link
              to={{ pathname: "/citypage/" + element.id }}
              state={{ cityid: element.id }}
            >
              <div className="card">
                <img src={element.imgurl} />
                <div className="card-body">
                  <h5 className="card-title">{element.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;
