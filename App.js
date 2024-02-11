import React from "react";
import ReactDOM, { createRoot }  from "react-dom/client";


const Header = () =>(
    <div className="Header">
        <div className="LogoContainer">
            <img className="Logo" src="https://img.freepik.com/free-vector/restaurant-tasty-food-logo-design_460848-10307.jpg?w=826&t=st=1707593527~exp=1707594127~hmac=dcc657da9d058456be4e79d8f9436ae3e5c3f55c2b20daaa01d1dc31af3f123f"/>
        </div>

        <div className="NavItems">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>

);

const AppLayout = () =>  (
        <div className="App"> 
        <Header/>
        </div>
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
