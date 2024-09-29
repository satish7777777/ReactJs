import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../feature/Handel/Apihandle";
import { useState, useEffect } from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { decrement } from "../feature/Handel/Apihandle";
import { deleteCart } from "../feature/Handel/Apihandle";

function CheckoutCart() {
  const addCartDataa = useSelector((state) => state.addcart);//getting cart data by useSelecter
  console.log("ADDCARTDATA", addCartDataa);
  const [subTotal, setSubTotal] = useState();
  const [afterGst, setAfterGst] = useState();
  const [finalPrice, setFinalPrice] = useState();

  let dispatch = useDispatch();

  const calculateTotalPrice = () => {//function for calculate all cart price before any TAX
    let total = 0;
    addCartDataa.forEach((item) => {
      total += item.ticketPrice; // Assuming each item has a 'price' and 'quantity' property
    });
    setSubTotal(total);
    calculateGst(total);
  };

  const calculateGst = (total) => {//Function to calculate GST
    let totalGst = 0;

    totalGst = total * (24 / 100);
    console.log("totalGst---", totalGst, total * (18 / 100), total, 18 / 100);
    setAfterGst(totalGst);
    final(total, totalGst);
  };

  const final = (total, totalGst) => {//function to calculate price after all TAX(FINAL PRICE)
    let finalPrice = 0;
    finalPrice = total + totalGst;
    setFinalPrice(finalPrice);
  };
  useEffect(() => {
    calculateTotalPrice();
  }, [addCartDataa]);

  const handleC = (e) => {//Dispatch function call on Onclick function
    dispatch(decrement());
    dispatch(deleteCart(e.id));
  };
  return (
    <div style={{ marginTop: 120 }}>
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
                      </div>

                      {addCartDataa.map((element, i) => (//mapping  the data 
                        <div className="card mb-3 mb-lg-0" key={i}>
                          <div className="card-body">
                            <div className="d-flex justify-content-between">
                              <div className="d-flex flex-row align-items-center">
                                <div>
                                  <img
                                    src={element.image} // Assuming you have image URL in element
                                    className="img-fluid rounded-3"
                                    alt={element.title}
                                    style={{ width: "65px" }}
                                  />
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
                                <div>
                                  <button
                                    onClick={() => {
                                      handleC(element);
                                    }}
                                    className="btn btn-outline-danger btn-sm"
                                  >
                                    <DeleteForeverIcon />
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="col-lg-5">
                      <div className="card bg-primary text-white rounded-3">
                        <div className="card-body">
                          <div className="d-flex justify-content-between align-items-center mb-4">
                            <h5 className="mb-0">Card details</h5>
                          </div>

                          <form className="mt-4">
                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeName"
                                className="form-control form-control-lg"
                                placeholder="Cardholder's Name"
                              />
                              <label className="form-label" htmlFor="typeName">
                                Cardholder's Name
                              </label>
                            </div>

                            <div className="form-outline form-white mb-4">
                              <input
                                type="text"
                                id="typeText"
                                className="form-control form-control-lg"
                                placeholder="1234 5678 9012 3457"
                              />
                              <label className="form-label" htmlFor="typeText">
                                Card Number
                              </label>
                            </div>

                            <div className="row mb-4">
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="text"
                                    id="typeExp"
                                    className="form-control form-control-lg"
                                    placeholder="MM/YYYY"
                                    size="7"
                                  />
                                  <label
                                    className="form-label"
                                    htmlFor="typeExp"
                                  >
                                    Expiration
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="form-outline form-white">
                                  <input
                                    type="password"
                                    id="typeText"
                                    className="form-control form-control-lg"
                                    placeholder="&#9679;&#9679;&#9679;"
                                    size="1"
                                  />
                                  <label
                                    className="form-label"
                                    htmlFor="typeText"
                                  >
                                    Cvv
                                  </label>
                                </div>
                              </div>
                            </div>
                          </form>

                          <hr className="my-4" />

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">Subtotal</p>
                            <p className="mb-2">Rs. {subTotal}</p>
                          </div>

                          <div className="d-flex justify-content-between">
                            <p className="mb-2">GST</p>
                            <p className="mb-2">Rs. {afterGst}</p>
                          </div>

                          <div className="d-flex justify-content-between mb-4">
                            <p className="mb-2">Total (Incl. taxes)</p>
                            <p className="mb-2">Rs. {finalPrice}</p>
                          </div>

                          <button
                            type="button"
                            className="btn btn-info btn-block btn-lg"
                          >
                            <div className="d-flex justify-content-between">
                              <span>Checkout</span>
                              <i className="fas fa-long-arrow-alt-right ms-2"></i>
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

export default CheckoutCart;
