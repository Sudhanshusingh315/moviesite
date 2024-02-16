import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { MyImage } from "../lazyloading/image";
import CircleRating from "../circleRating/CircleRating";
import Slider from "react-slick";
import "./carousel.css";
import Genres from "../genres/Genres.jsx";
export const Carousel = ({ data, loading, media, title }) => {
  const url = useSelector((state) => state.home.url);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  const navigate = useNavigate();

  // skeleton : not finished yet
  // const skeleton = () => {
  //   <div className="imagesSliderskt">
  //     <div className="eachCardskt">
  //       <div className="imageCardskt">
  //         <div className="imageskt"></div>
  //       </div>
  //       <div className="textData">
  //         <div className="titleskt">
  //           <div className="dateskt"></div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>;
  // };
  return (
    <>
      {!loading ? (
        <div className="imageSlider">
          <Slider {...settings}>
            {data?.map((item) => {
              return (
                <>
                  <div
                    className="eachCard"
                    onClick={() => navigate(`/${item.media_type}/${item.id}`)}
                  >
                    <Genres data={item?.genre_ids.slice(0, 2)} />
                    <div className="imageCard">
                      <MyImage
                        className={"image"}
                        src={url.backdroup_base_url + item?.poster_path}
                      />
                      <CircleRating rating={item.vote_average.toFixed(1)} />
                    </div>
                    <div className="textData">
                      <div className="titleData">{item?.title}</div>
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
        <div style={{ color: "white" }}>Loding...</div>
      )}
    </>
  );
};
