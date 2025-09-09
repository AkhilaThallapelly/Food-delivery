// app.js
import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import Body from "./components/Body";


const App=()=>{
    return(
        <div id="app">
            <div className="head">
                <Heading/>
            </div>
            <div className="body">
                <Body/>
            </div>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
root.render(<App/>);