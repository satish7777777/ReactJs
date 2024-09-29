import React, { useContext } from "react";
import { contextData } from "../Context/Context";
import { useState, useEffect } from "react";

function AddCart() {
  const { posts, setCart, cart } = useContext(contextData);
  const [subTotal, setSubTotal] = useState();
  const [afterGst, setAfterGst] = useState();
  const [finalPrice, setFinalPrice] = useState();

  const calculateTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.ticketPrice; // Assuming each item has a 'price' and 'quantity' property
    });
    setSubTotal(total);
    calculateGst(total);
    
  };

  const calculateGst = (total) => {
    let totalGst = 0;

    totalGst = total * (18/100);
    console.log("totalGst---",totalGst, total * (18/100), total , (18/100))
    setAfterGst(totalGst);
    final(total,totalGst);
  };

  const final = (total,totalGst) =>{
    let finalPrice = 0;
    finalPrice = total + totalGst;
    setFinalPrice(finalPrice)
  }
  useEffect(() => {
    calculateTotalPrice();
   
  }, [cart]);

  console.log("====cart================================");
  console.log(cart);
  console.log("=====cart===============================");
  return (
    <div style={{ marginTop: 100 }}>
      AddCart
      <section className="h-100 h-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card">
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-lg-7">
                      <h5 className="mb-3">
                        <a href="#!" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue shopping
                        </a>
                      </h5>

                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                          <p className="mb-1">Shopping cart</p>
                          <p className="mb-0">
                            You have shopping items in your cart
                          </p>
                        </div>
                        <div></div>
                      </div>
                      {cart.map((element, i) => {
                        console.log("Element", element);
                        return (
                          <div className="card mb-3 mb-lg-0">
                            <div className="card-body">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row align-items-center">
                                  <div>
                                    {/* <img src=""/> */}
                                    {/* <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img4.webp"
                            className="img-fluid rounded-3" alt="Shopping item" style="width: 65px;" />  */}
                                  </div>

                                  <div className="ms-3">
                                    <h5>{element.title}</h5>
                                    <p className="small mb-0">
                                      Rating: {element.rating}
                                    </p>
                                  </div>
                                </div>
                                <div className="d-flex flex-row align-items-center">
                                  <div style={{ width: "50px" }}>
                                    <h5 className="fw-normal mb-0">1</h5>
                                  </div>
                                  <div style={{ width: "80px" }}>
                                    <h5 className="mb-0">
                                      Rs. {element.ticketPrice}
                                    </h5>
                                  </div>

                                  {/* <a href="#!" style="color: #cecece;"><i className="fas fa-trash-alt"></i></a> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                            {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp" 
                        className="img-fluid rounded-3" style="width: 45px;" alt="Avatar" /> */}
                          </div>

                          <p className="small mb-2">Card type</p>

                          <form className="mt-4">
                            <div
                              data-mdb-input-init
                              className="form-outline form-white mb-4"
                            >
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                placeholder="Cardholder's Name"
                              />
                              <label className="form-label">
                                Cardholder's Name
                              </label>
                            </div>

                            <div
                              data-mdb-input-init
                              className="form-outline form-white mb-4"
                            >
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                placeholder="1234 5678 9012 3457"
                              />
                              <label className="form-label">Card Number</label>
                            </div>

                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div
                                  data-mdb-input-init
                                  className="form-outline form-white"
                                >
                                  <input
                                    type="text"
                                    id="typeExp"
                                    className="form-control form-control-lg"
                                    placeholder="MM/YYYY"
                                    size="7"
                                  />
                                  <label className="form-label">
                                    Expiration
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div
                                  data-mdb-input-init
                                  className="form-outline form-white"
                                >
                                  <input
                                    type="password"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    size="1"
                                  />
                                  <label className="form-label">Cvv</label>
                                </div>
                              </div>
                            </div>
                          </form>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal </p>
                            <p className="mb-2">${subTotal}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">GST</p>
                            <p className="mb-2">RS. {afterGst}</p>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total(Incl. taxes)</p>
                            <p className="mb-2">RS.{finalPrice}</p>
                          </div>

                          <button
                            type="button"
                            data-mdb-button-init
                            data-mdb-ripple-init
                            className="btn btn-info btn-block btn-lg"
                          >
                            <div className="d-flex justify-content-between">
                              <span></span>
                              <span>
                                Checkout
                                <i className="fas fa-long-arrow-alt-right ms-2"></i>
                              </span>
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AddCart;
