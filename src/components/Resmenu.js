import { useState, useEffect } from "react";
import { resmenu } from "../utils/constants";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import Rescategory from "./Rescategory";


const Resmenu = () => {
  const [menu, setMenu] = useState(null);
  const { resid } = useParams();

  useEffect(() => {
    fetchMenu();
   
  }, []);

  const fetchMenu = async () => {
    try {
      const data = await fetch(resmenu + resid);
      const json = await data.json();
      setMenu(json.data);
      console.log(json?.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!menu) {
    return <Shimmer />;
  }

  const {name, cuisines, costForTwoMessage } =menu?.cards[2]?.card?.card?.info;
  console.log(menu?.cards[2]?.card?.card?.info);

  const itemCards =
    menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
   console.log(menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const category=menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
    (c?.card?.card?.['@type']==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
)
  console.log(category);
  return (
  <div className="max-w-3xl mx-auto my-8">
    {/* Restaurant Header */}
    <div className="text-center bg-white shadow-lg rounded-2xl p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
      <p className="text-gray-600 text-lg mb-1">{cuisines?.join(", ")}</p>
     
    </div>

    {/* Categories */}
    <div className="mt-8 space-y-6">
      {category?.map((c) => (
        <Rescategory 
          key={c.card.card.title} 
          rescat={c.card.card} 
        />
      ))}
    </div>
  </div>
);

};

export default Resmenu;

