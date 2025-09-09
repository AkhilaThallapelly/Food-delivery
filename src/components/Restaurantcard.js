import { CDN_URL } from "../utils/constants";

const Restaurantcard=(resdata)=>{
    // const {resname,cusinies}=props;
    console.log(resdata);
    const {name,cuisines,avgRating,cloudinaryImageId}=resdata.resdata;
    return (
        <div className="res-card">
            <img src={CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating}</h4>
        </div>
    )
}
export default Restaurantcard;