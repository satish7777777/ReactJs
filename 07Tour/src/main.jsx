import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PostContextData } from "./PostContext.jsx";
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <PostContextData value={{}}>
      <App />
    </PostContextData>
  </Router>
);
