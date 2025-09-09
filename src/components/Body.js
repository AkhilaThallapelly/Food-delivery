import Restaurantcard from "./Restaurantcard";
import reslist from "../utils/mockdata";
const Body=()=>{
    return(
        <div className="body">
            <div className="search">
                search
            </div>
            <div className="res-con">
                {reslist.map((li)=>{
                    return <Restaurantcard key={li.info.id} resdata={li.info}/>
                })}
                {/* <Restaurantcard resdata={reslist[0]?.info}/> */}
                {/* <Restaurantcard key={li.info.id} {...li.info} */}
                
                
            </div>
        </div>
    )
}
export default Body;