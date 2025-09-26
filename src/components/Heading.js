import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useStatuschecker from "../utils/useStatuschecker";

const Heading = () => {
  const [btnname, setbtnname] = useState("Login");
  const isOnline = useStatuschecker();

  return (
    <header className="flex items-center justify-between bg-gray-900 text-white px-6 py-3 shadow-md">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img src={LOGO_URL} alt="logo" className="h-12 w-12 rounded-full" />
        <span className="text-xl font-bold tracking-wide">FoodDelivery</span>
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex items-center gap-6 text-lg">
          {/* Online/Offline Status */}
          <li className="text-2xl">{isOnline ? "🟢" : "🔴"}</li>

          <li>
            <Link to="/" className="hover:text-yellow-400 transition">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-400 transition">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-400 transition">
              CONTACT US
            </Link>
          </li>
          <li className="hover:text-yellow-400 transition cursor-pointer">
            CART
          </li>

          {/* Login/Logout Button */}
          <li>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg shadow-md transition"
              onClick={() => {
                btnname === "Login" ? setbtnname("Logout") : setbtnname("Login");
              }}
            >
              {btnname}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Heading;
