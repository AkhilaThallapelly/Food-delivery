import { LOGO_URL } from "../utils/constants";

const Heading=()=>{
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
                </ul>
            </div>
        </div>
    )
}
export default Heading; 