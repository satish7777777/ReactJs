import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
// import Fetch, { loadData } from "../../Fetch";
// import { all } from '@awesome.me/kit-KIT_CODE/icons'
// import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import Category from "./Category";
import Cart from "./Cart";

function Product() {
  const [categoryData, setCategoryData] = useState([]);
  const [dataArr, setDataArr] = useState([]);
  const [category, setCategory] = useState([]);
  const [catBG, setCatBG] = useState();


  

  const [cart, setCart] = useState([]);

  useEffect(() => {
    // let fdata = data.filter((e) =>{
    //    return e
    // })
    // setCategoryData(fdata);

    loadData();
  }, []);

  function loadData() {
    fetch("https://fakestoreapi.in/api/products")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        const data = res.products;
        let category = [...new Set(data.map((key) => key.category))];
        console.log("category", category);

        //console.log("Data", data);
        setCategory(category);

        //setDataArr([...dataArr,data])
        setDataArr(data);
        setCategoryData(data)
        console.log("DataArr", dataArr);
      });
  }

  const filterData = (string) => {
    console.log("string--",string)
    setCatBG()
    let fdata = dataArr.filter((e) => {
      if (e.category == string) {
        e.checked = true
        return e;
      }else{
        e.checked = false

      }
    });
    setCatBG("#08a9ff")
    setCategoryData(fdata);
  };

  function cartDetail(element) {
    let alldata = JSON.parse(JSON.stringify(dataArr));
    let cartArr = JSON.parse(JSON.stringify(cart));
    cartArr.push(element);
    setCart(cartArr);
    console.log("cart", cart);
  }

  return (
    <div className="container-fluid w-100 " style={{}}>
      <div className="row">
        <div
          style={{ top: 80 }}
          className="col-2 sticky-top  h-25 shadow-sm p-3 mb-5 bg-body rounded border-start-0"
        >
          {/* <Category /> */}
          <h4>
            <CategoryIcon />
            Categories
          </h4>
          {/* <Category /> */}
          {category.map((e) => (
            <div key={e} style={{backgroundColor:e.checked ? catBG : ""}}>
              <span
                className="border-1 " 
                onClick={() => {
                  //colorBlack(e);
                  console.log(e);
                  filterData(e);
                }}
              >
                {e}
              </span>
            </div>
          ))}
        </div>
        <div className="col-10 item-container">
          {/* <Cart /> */}
          {categoryData.map((element) => {
            return (
              <Link to={"/productpage"} state={element}>
                <div
                  className="card col-sm-4"
                  style={{ width: "13rem", height: "auto", margin: 20 }}
                >
                  <img
                    className="card-img-top"
                    src={element.image}
                    alt="Card image cap"
                    style={{ height: "130px", width: "12rem" }}
                  ></img>
                  <div className="card-body">
                    <h5 className="card-title">{element.title.slice(0, 11)}</h5>

                    <p className="card-text m-0 p-0">
                      {element.description.slice(0, 15)}
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <span>
                      Discount:<strong>{element.discount}</strong>
                    </span>
                    <h5>Brand:{element.brand}</h5>
                    <br />
                    <div className="m-0 p-0">
                      <p className="m-0 p-0">
                        $<strong>{element.price}</strong>{" "}
                      </p>
                      <button
                        className="btn btn-primary globalBGColour text-black"
                        onClick={() => cartDetail(element)}
                      >
                        <ShoppingCartIcon />
                        Add To Cart
                      </button>

                      <a
                        href="#"
                        className="btn btn-primary bg-warning text-black"
                      >
                        Add to Cart
                      </a>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Product;
