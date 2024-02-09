import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

const jsxheading = <h1 id="heading">Hi Yash This msg is from JSX.</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);