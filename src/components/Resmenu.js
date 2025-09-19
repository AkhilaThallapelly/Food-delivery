import { useState, useEffect } from "react";
import { resmenu } from "../utils/constants";
import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";


const Resmenu = () => {
  const [menu, setMenu] = useState(null);
  const { resid } = useParams();

  useEffect(() => {
    fetchMenu();
    // eslint-disable-next-line
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

  const { name, cuisines, costForTwoMessage } =
    menu?.cards[2]?.card?.card?.info || {};

  const itemCards =
    menu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards || [];

  return (
    <div className="resmenu-container">
      <div className="resmenu-header">
        <h1 className="resmenu-title">{name}</h1>
        <p className="resmenu-cuisines">{cuisines?.join(", ")}</p>
        <p className="resmenu-cost">{costForTwoMessage}</p>
      </div>

      <div className="resmenu-items">
        {itemCards.map((item) => {
          const info = item.card.info;
          return (
            <div className="menu-card" key={info.id}>
              <div className="menu-info">
                <h3 className="menu-name">{info.name}</h3>
                {info.description && (
                  <p className="menu-desc">{info.description}</p>
                )}
                <p className="menu-price">
                  ₹{(info.price ?? info.defaultPrice) / 100}
                </p>
              </div>
              {info.imageId && (
                <img
                  className="menu-img"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/${info.imageId}`}
                  alt={info.name}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Resmenu;
