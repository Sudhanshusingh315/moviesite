import React, { useEffect, useRef } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { MyImage } from "../lazyloading/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./carousel.css";

export const Carousel = ({ data, loading }) => {
  const url = useSelector((state) => state.home.url);
  console.log(data);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  let box = document.querySelector(".slider-container");
  const handleNext = () => {
    let width = box.clientWidth;
    console.log(width);
    box.scrollLeft = box.scrollLeft + width;
  };
  const handlePrevious = () => {
    console.log("pre");
    let width = box.clientWidth;
    console.log(width);
    box.scrollLeft = box.scrollLeft - 300 - width;
  };
  return <>) : ( console.log("data hasn't been found yet") )}</>;
};
