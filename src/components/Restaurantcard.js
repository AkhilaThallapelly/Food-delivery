import { CDN_URL } from "../utils/constants";

const Restaurantcard = (resdata ) => {
  const { id, name, cuisines, avgRating, cloudinaryImageId } = resdata;

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transform  overflow-hidden">
  {/* Restaurant Image */}
  <img
    src={CDN_URL + cloudinaryImageId}
    alt={name}
    className="w-full h-48 object-cover"
  />



      {/* Restaurant Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
        <p className="text-sm text-gray-500 mt-1 truncate">
          {cuisines.join(", ")}
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center">
          <span
            className={`px-2 py-1 rounded-lg text-sm font-medium ${
              avgRating >= 4
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            ⭐ {avgRating}
          </span>
        </div>
      </div>
    </div>
  );
};
export const withOfferLabel=(Restaurantcard)=>{
  return(resdata)=>{
    return (
      <div className="relative">
       { (
          <span className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs rounded">
            {resdata.aggregatedDiscountInfoV3.header}{" "}
            {resdata.aggregatedDiscountInfoV3.subHeader}
          </span>
        )}
         <Restaurantcard {...resdata}/>
         </div>
    )

  }
}
export default Restaurantcard;
