import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./style.css";
// add your own image
import { MyImage } from "../lazyloading/Image";
// add your own rating
import CircleRating from "../circleRating/CircleRating";
// add your own genres
import Genres from "../genres/Genres";
// add your own poster
import PosterFallback from "../../../public/default_poster.jpg";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.backdroup_base_url + data.poster_path
    : PosterFallback; //change the fallback image
  return (
    <div
      className="movieCard"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div className="posterBlockMC">
        {/* add image tag */}
        <MyImage className="posterImg" src={posterUrl} />
        {!fromSearch && (
          <React.Fragment>
            {/* add circle rating tag */}
            <CircleRating rating={data.vote_average.toFixed(1)} />
            <Genres data={data.genre_ids.slice(0, 2)} />
          </React.Fragment>
        )}
      </div>
      <div className="textBlockMC">
        <span className="titleMC">{data.title || data.name}</span>
        <span className="dateMC">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
