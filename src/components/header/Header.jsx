import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./header.css";
import ContentWrapper from "../contentWrapper/Contentwrapper"; // for centering the div in all cases

// start of my component
export function Header() {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const src = "./meow.jpeg";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navigationHandler = (type) => {
    navigate(`/explore/${type}`);
  };
  return (
    <header>
      <div className="logo">
        <img className="my-logo" src={src} alt="" />
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
