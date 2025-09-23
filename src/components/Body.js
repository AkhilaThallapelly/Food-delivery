import Restaurantcard from "./Restaurantcard";
// import reslist from "../utils/mockdata";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
import useStatuschecker from "../utils/useStatuschecker";
const Body=()=>{
    const [lstreslist,setlstresList]=useState([]);
    const [filteredres,setfilteredres]=useState([]);
    const [searchText,setsearchText]=useState("");
    const isOnline=useStatuschecker();
    useEffect(()=>{
        fetchData();
    },[]);
    async function fetchData(){
        let list=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&page_type=DESKTOP_WEB_LISTING");
        list=await list.json();
        console.log();


        setlstresList(list.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setfilteredres(list.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    }
    if(lstreslist.length===0){
        return <Shimmer/>
    }
    if(!isOnline)
        return(
    <div style={{ 
        textAlign: "center", 
        marginTop: "50px", 
        color: "red", 
        fontFamily: "Arial, sans-serif" 
      }}>
        <h1>🚨 Oops! You’ve gone offline...</h1>
        <p>
          Don’t worry, we’ll reconnect as soon as you’re back online.  
          Meanwhile, maybe grab a ☕ or take a short break 😌
        </p>
      </div>
    );
    return(
        
        
        <div className="body">
            <div className="search">
                <div className="filter">
                    <input type="text" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}></input>
                    <button onClick={()=>{
                        console.log(searchText);
                        // In JavaScript, every string includes the empty string ("abc".includes("") === true)
                        let fres=lstreslist.filter(res=>res.info.name.toLowerCase().includes(searchText.toLowerCase())
);                      console.log(fres);
                        setfilteredres(fres);
                    }}>Search</button>
                </div>
                <button onClick={()=>{
                    console.log("clicked");
                    let filtered=lstreslist.filter(res=>res.info.avgRating>=4.6);
                    console.log(filtered);
                    setfilteredres(filtered);
                }}>Top restaurants</button>
            </div>
            <div className="res-con">

                {filteredres.map((li)=>{
                    return <Link   key={li.info.id} to={"/restaurant/"+li.info.id}><Restaurantcard resdata={li.info}/></Link>
                })}
                {/* <Restaurantcard resdata={reslist[0]?.info}/> */}
                {/* <Restaurantcard key={li.info.id} {...li.info} */}
                
                
            </div>
        </div>
    )
}
export default Body;