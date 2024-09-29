import React, { useEffect } from "react";
import { useState } from "react";
// import { useSelector } from 'react-redux';
// import { addCart } from '../feature/feature';
import { getAllItem } from "../../services/Item";

function Footer({ items, handelCalcumations }) {
  // const addCartDataa = useSelector((state) => state.addcart);
  // console.log("CartData",addCartDataa)
  const [colomns, setColumns] = useState([]);
  const [itemsData, setItemsData] = useState([]);
  const [subTotal, setSubTotal] = useState();
  const [discount, setDiscount] = useState();
  const [tax, setTax] = useState();
  const [gross, setGross] = useState(0);
  const [roundoff, setRoundoff] = useState(0);
  const [netAmount, setNetAmount] = useState(0);
  const [finalPrice, setFinalPrice] = useState();

  useEffect(() => {
    // handelCalcumations();
    console.log("items-0--", items);
    setItemsData(items);
    // console.log("FooterBody", body)
    calculateTotalPrice(items);
  }, [items]);

  const calculateTotalPrice = (items) => {
    //function for calculate all cart price before any TAX
    let total = 0;
    items.forEach((item) => {
      total += item.amount; // Assuming each item has a 'price' and 'quantity' property
    });
    setSubTotal(total);
    calculateDiscount(total);
  };

  const calculateDiscount = (total) => {
    let discount = 0;
    discount = total * (5 / 100);
    console.log("discont", discount);
    setDiscount(discount);
    calculateTax(total, discount);
  };

  const calculateTax = (total, discount) => {
    let tax = 0;
    tax = total * (12 / 100);
    console.log("tax", tax);
    setTax(tax);
    calculateGross(total, tax, discount);
  };

  const calculateGross = (total, tax, discount) => {
    let gross = 0;
    gross = total - discount + tax;
    console.log("gross", gross);
    setGross(gross);
    calculateRoundoff(gross);
  };
  const calculateRoundoff = (gross) => {
    let rounded = Math.round(gross);
    console.log("roundoff", rounded);
    const roundAmount = rounded - gross;
    setRoundoff(roundAmount);
    setNetAmount(rounded);
    // calculateNetAmount(rounded);
  };

  useEffect(() => {
    const calculations = {
      total: subTotal,
      dis: discount,
      tax: tax,
      gross: gross,
      round: roundoff,
      netAmt: netAmount,
    };

    handelCalcumations(calculations)
  }, [netAmount]);

  const calculateNetAmount = (gross) => {
    let net = gross;
    console.log("net amount", net);
  };

  // const calculateNet = (rounded) => {
  //   let discon = discount
  //   let net = rounded-discon;
  //   console.log("net", rounded);
  //   setRoundoff(rounded);
  // };

  return (
    <div className="flex justify-end">
      <div className="flex flex-col space-y-4">
        {/* {itemsData.map((item, index) => ( */}
        <div>
          <label className="text-gray-700">Total:</label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={subTotal}
            readOnly
          />
        </div>
        {/* ))} */}
        <div>
          <label className="text-gray-700">Discount:</label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={discount}
          />
        </div>
        <div>
          <label className="text-gray-700">Tax:</label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={tax}
          />
        </div>
        <div>
          <label className="text-gray-700">Gross:</label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={gross}
          />
        </div>
        <div>
          <label className="text-gray-700">Roundoff:</label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={roundoff}
          />
        </div>
        <div>
          <label className="text-gray-700">Net:</label>
          <input
            className="mt-1 px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={netAmount}
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
