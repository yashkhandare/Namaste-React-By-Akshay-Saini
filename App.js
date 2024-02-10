import React from "react";
import ReactDOM, { createRoot }  from "react-dom/client";

// const heading = React.createElement("h1", {id: "heading"}, "Namaste React");

const Title = () => (<h1 className="head" tabIndex="5">This is Title.</h1>);

const HeadingComponent = () => ( 
            <div id ="container">
                <Title/>

                <h1 className="Heading">This is with Braces Functional Comonent.</h1>
            </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
