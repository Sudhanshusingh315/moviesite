import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import { MyImage } from "../lazyloading/Image";
import CircleRating from "../circleRating/CircleRating";
import Slider from "react-slick";
import "./carousel.css";
import Genres from "../genres/Genres.jsx";
import PosterFallback from "../../../public/default_poster.jpg";
export const Carousel = ({ data, loading, endpoint, title }) => {
  const url = useSelector((state) => state.home.url);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
  };
  const navigate = useNavigate();
  const skItem = () => {
    return (
      <div className="skeletonItem">
        <div className="posterBlock skeleton"></div>
        <div className="textBlock">
          <div className="title skeleton"></div>
          <div className="date skeleton"></div>
        </div>
      </div>
    );
  };
  return (
    <>
      {!loading ? (
        <div>
          {title && <div className="carouselTitle">{title}</div>}
          <div className="imageSlider">
            <Slider {...settings}>
              {data?.map((item) => {
                const posterUrl = item.poster_path
                  ? url.backdroup_base_url + item.poster_path
                  : PosterFallback;
                return (
                  <>
                    <div
                      className="eachCard"
                      onClick={() =>
                        navigate(`/${item.media_type || endpoint}/${item.id}`)
                      }
                    >
                      <Genres data={item?.genre_ids.slice(0, 2)} />
                      <div className="imageCard">
                        <MyImage className={"image"} src={posterUrl} />
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
        </div>
      ) : (
        <div className="loadingSkeleton">
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
          {skItem()}
        </div>
      )}
    </>
  );
};
