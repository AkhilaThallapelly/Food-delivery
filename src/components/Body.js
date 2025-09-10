import Restaurantcard from "./Restaurantcard";
import reslist from "../utils/mockdata";

import {useState} from "react";
const Body=()=>{
    const [lstreslist,setlstresList]=useState(reslist);
    return(
        
        
        <div className="body">
            <div className="search">
                <button onClick={()=>{
                    console.log("clicked");
                    let filtered=lstreslist.filter(res=>res.info.avgRating>=4.5);
                    console.log(filtered);
                    setlstresList(filtered);
                }}>Top restaurants</button>
            </div>
            <div className="res-con">
                {lstreslist.map((li)=>{
                    return <Restaurantcard key={li.info.id} resdata={li.info}/>
                })}
                {/* <Restaurantcard resdata={reslist[0]?.info}/> */}
                {/* <Restaurantcard key={li.info.id} {...li.info} */}
                
                
            </div>
        </div>
    )
}
export default Body;