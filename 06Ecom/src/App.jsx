import { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ProductPage from "./components/AddCart/ProductPage";
import SignIn from "./components/Sign/SignIn";

function App() {
  // const [dataArr, setDataArr] = useState([]);
  // const [category, setCategory] = useState([]);

  // useEffect(() => {
  //   console.log("dataArr---", dataArr);
  // }, [dataArr]);

  // async function loadData() {
  //   fetch("https://fakestoreapi.in/api/products")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res);
  //       const data = res.products;
  //       let category = [...new Set(data.map((key) => key.category))];
  //       console.log("category", category);

  //       //console.log("Data", data);
  //       setCategory(category);

  //       //setDataArr([...dataArr,data])
  //       setDataArr(data);
  //       console.log("DataArr", dataArr);
  //     });
  // }

  // useEffect(() => {
  //   loadData();
  // }, []);

  return (
    <>
      {/* <BrowserRouter> */}
        {/* <Header /> */}

        {/* <Routes> */}
          {/* <Route
            exact path=""
            element={<Product />}
          /> */}
          {/* <Route exact path="/productpage" element={<ProductPage />} /> */}
          {/* <Route exact path="/signin" element={<SignIn />} /> */}
        {/* </Routes> */}
        <Header />
        <Outlet/>
        <Footer />
      {/* </BrowserRouter> */}
      <h1>saddam</h1>
    </>
  );
}

export default App;



{/* <Product data={dataArr} category={category} /> */}