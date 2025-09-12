import Restaurantcard from "./Restaurantcard";
// import reslist from "../utils/mockdata";
import Shimmer from "./shimmer";
import {useState,useEffect} from "react";
const Body=()=>{
    const [lstreslist,setlstresList]=useState([]);
    const [filteredres,setfilteredres]=useState([]);
    const [searchText,setsearchText]=useState("");
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
                    return <Restaurantcard key={li.info.id} resdata={li.info}/>
                })}
                {/* <Restaurantcard resdata={reslist[0]?.info}/> */}
                {/* <Restaurantcard key={li.info.id} {...li.info} */}
                
                
            </div>
        </div>
    )
}
export default Body;