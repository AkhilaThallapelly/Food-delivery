import Restaurantcard from "./Restaurantcard";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useStatuschecker from "../utils/useStatuschecker";

const Body = () => {
  const [lstreslist, setlstresList] = useState([]);
  const [filteredres, setfilteredres] = useState([]);
  const [searchText, setsearchText] = useState("");
  const isOnline = useStatuschecker();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    let list = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946&page_type=DESKTOP_WEB_LISTING"
    );
    list = await list.json();

    setlstresList(
      list.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredres(
      list.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  }

  if (lstreslist.length === 0) {
    return <Shimmer />;
  }

  if (!isOnline)
    return (
      <div className="text-center mt-16 text-red-600 font-sans px-4">
        <h1 className="text-3xl font-bold">🚨 Oops! You’ve gone offline...</h1>
        <p className="mt-2 text-lg text-gray-700">
          Don’t worry, we’ll reconnect as soon as you’re back online. <br />
          Meanwhile, maybe grab a ☕ or take a short break 😌
        </p>
      </div>
    );

  return (
    <div className="px-6 py-6">
      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        {/* Search Box */}
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            placeholder="Search restaurants..."
            className="w-full sm:w-72 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            onClick={() => {
              let fres = lstreslist.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredres(fres);
            }}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-medium px-4 py-2 rounded-lg shadow transition"
          >
            Search
          </button>
        </div>

        {/* Top Restaurants Button */}
        <button
          onClick={() => {
            let filtered = lstreslist.filter((res) => res.info.avgRating >= 4.6);
            setfilteredres(filtered);
          }}
          className="bg-green-500 hover:bg-green-600 text-white font-medium px-4 py-2 rounded-lg shadow transition"
        >
          ⭐ Top Restaurants
        </button>
      </div>

      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredres.map((li) => {
          return (
            <Link key={li.info.id} to={"/restaurant/" + li.info.id}>
              <Restaurantcard resdata={li.info} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
