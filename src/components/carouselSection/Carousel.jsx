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
import "./carousel.css";

export const Carousel = ({ data, loading }) => {
  const url = useSelector((state) => state.home.url);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  return (
    <>
      {!loading ? (
        <div className="imageSlider">
          <Slider {...settings}>
            {data?.map((item) => {
              return (
                <>
                  <div className="eachCard">
                    <div className="imageCard">
                      <MyImage
                        className={"image"}
                        src={url.backdroup_base_url + item?.poster_path}
                      />
                    </div>
                    <div className="textData">
                      <div className="title">{item?.title}</div>
                      <div className="date">
                        {dayjs(item.release_date).format("MMM DD,YYYY")}
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      ) : (
        <div>working on loading</div>
      )}
    </>
  );
};
