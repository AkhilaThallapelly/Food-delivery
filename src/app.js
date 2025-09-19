// app.js
import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Error from "./components/Error"; 
import Resmenu from "./components/Resmenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";



function App() {
    return (
        <div id="app">
            <div className="head">
                <Heading />
            </div>
            <div className="body">
                <Outlet />
            </div>
        </div>
    );
}
const config=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
        path:"/about",
        element:<Aboutus/>
    },
    {
        path:"/contact",
        element:<Contactus/>
    },
    {
        path:"/restaurant/:resid",
        element:<Resmenu/>
    }
    ],
        errorElement:<Error/>
    },
    
    
])
const root=ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
root.render(<RouterProvider router={config}/>);