// app.js
import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Error from "./components/Error"; 
import { createBrowserRouter,RouterProvider } from "react-router-dom";



function App() {
    return (
        <div id="app">
            <div className="head">
                <Heading />
            </div>
            <div className="body">
                <Body />
            </div>
        </div>
    );
}
const config=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<Aboutus/>
    },
    {
        path:"/contact",
        element:<Contactus/>
    }
    
])
const root=ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
root.render(<RouterProvider router={config}/>);