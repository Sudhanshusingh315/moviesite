import { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";
import header_pic from "../../../public/meow.jpeg";
import "./header.css";

// start of my component
export function Header() {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const header = header_pic;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigationHandler = (type) => {
    navigate(`/explore/${type}`);
  };
  return (
    <header>
      <div
        className="logo"
        onClick={() => {
          navigate("/");
        }}
      >
        <img className="my-logo" src={header} alt="" />
      </div>
      <ul className="ulItems">
        <li className="ulmenuItems" onClick={() => navigationHandler("movie")}>
          Movies
        </li>
        <li className="ulItems" onClick={() => navigationHandler("tv")}>
          Tv Shows
        </li>
        <li className="ulItems">
          <HiOutlineSearch />
        </li>
      </ul>
    </header>
  );
}
