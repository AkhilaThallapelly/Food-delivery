import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
const Heading=()=>{
    const [btnname,setbtnname]=useState("Login");
    return (
        // style={{backgroundColor:"black"}}
        <div className="head-cont" >
            <div className="logo">
                <img src={LOGO_URL} alt="image"></img>
            </div>
            <div className="list">
                <ul>
                    <li>HOME </li>
                    <li>ABOUT US</li>
                    <li>CONTACT US</li>
                    <li>CART</li>
                    <button className="login-btn" onClick={()=>{
                        btnname==="Login"?setbtnname("Logout"):setbtnname("Login");
                    }}>{btnname}</button>
                </ul>
            </div>
        </div>
    )
}
export default Heading; 