import React from "react";
import ReactDOM  from "react-dom/client";

const heading = React.createElement("h1", {id: "heading"}, "Namaste React");


const newheading = () => <h1>This is without Braces Functional Comonent.</h1>;

const newheading2 = () => { 
            <h1>This is with Braces Functional Comonent.</h1>
        };