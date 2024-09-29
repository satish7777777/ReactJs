import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import BillShow from "./components/BillShow/BillShow";
import { Provider } from "react-redux";
import { store } from "../../08TourRedux/src/app/store";
import { postCustomerDetail } from "./services/ApiCall";

function App() {
  const [count, setCount] = useState(0);
  const [customerData, setCustomerData] = useState({
    date: "",
    billNo: "",
    customerName: "",
    address: "",
  });
  const [items, setItems] = useState([]);
  const [calculations, setCalculations] = useState([]);

  const [body, setBody] = useState([]);

  function handleChange(e) {
    //set and take data from the INPUT
    console.log("changeHandle", e, e.target.name, e.target.value);
    setCustomerData({
      //set the INPUT data
      ...customerData,
      [e.target.name]: e.target.value,
    });
  }
  const handleChangeForItem = (items) => {
    console.log("handleChangeForItem--", items);
    setItems(items);
  };
  const Calculations = (calculations) => {
    console.log("calculations--", calculations);
    setCalculations(calculations);
  };

  const onSubmit = () => {
    const finalData = [];
    finalData.push({ ...customerData, items, ...calculations });
    console.log("finalData--",finalData)
    postCustomerDetail(finalData[0])

  };


  console.log("customerData", customerData);
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center">
        Bill Application
      </h1>
      <Provider store={store}>
        <BrowserRouter>
        <Header handleChange={handleChange} formData={setCustomerData} />
          <div>
          <Link
              to="/billview"
              className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded-md transition duration-300"
            >
            <button className="btn" onClick={onSubmit}>
              Show Bills
            </button>
            </Link>
          </div>
          <Routes>
          
            <Route
              path={"/"}
              element={<Body handleChangeForItem={handleChangeForItem} />}
            />

            <Route path={"/billview"} element={<BillShow />} />
          </Routes>

          <Footer items={items} handelCalcumations={Calculations} />
          <div>
            <button className="btn" onClick={onSubmit}>
              Submit
            </button>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
