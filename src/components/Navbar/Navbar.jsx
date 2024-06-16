// Navbar.js
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useContext, useState } from "react";
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { setCurrency } = useContext(CoinContext);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "usd":
        setCurrency({ name: "usd", symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", symbol: "€" });
        break;
      case "inr":
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      default:
        setCurrency({ name: "usd", symbol: "$" });
        break;
    }
  };

  return (
    <div className="navbar">
      <Link to="/">
      <h1>CryptoTrack</h1>
      </Link>
      <ul>
        <Link to="/">
          <li
            className={activeIndex === 0 ? "clicked" : ""}
            onClick={() => handleClick(0)}
          >
            Home
          </li>
        </Link>
        <Link to="/features">
          <li
            className={activeIndex === 1 ? "clicked" : ""}
            onClick={() => handleClick(1)}
          >
            Features
          </li>
        </Link>
        <Link to="/pricing">
          <li
            className={activeIndex === 2 ? "clicked" : ""}
            onClick={() => handleClick(2)}
          >
            Pricing
          </li>
        </Link>
        <Link to="/blog">
          <li
            className={activeIndex === 3 ? "clicked" : ""}
            onClick={() => handleClick(3)}
          >
            Blogs
          </li>
        </Link>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <Link to="/learn-crypto" className="crypto-link">
          Learn More About Crypto..
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
