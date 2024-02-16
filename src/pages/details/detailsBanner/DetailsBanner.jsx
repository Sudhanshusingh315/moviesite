import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { MyImage } from "../../../components/lazyloading/image";
import { useSelector } from "react-redux";
import "./detailsbanner.css";
import dayjs from "dayjs";
import DetailsGenres from "../detailsGenres/DetailGenres";
import DetailsCircleRating from "../detailsCircular/DetailsCircular";
import VideoPopup from "../../../components/videoPopup/VideoPopUp";
import { PlayIcon } from "../Playicon";
import { useState } from "react";
const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoid] = useState(null);
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const url = useSelector((state) => state.home.url);
  const runtime = (time) => {
    const hour = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hour}hr ${minutes}m`;
  };
  const director = crew.filter(
    (person) => person.known_for_department === "Directing"
  );
  const writer = crew.filter(
    (person) => person.known_for_department === "Writing"
  );

  console.log("director", director);
  return (
    <>
      {/* <div className="opacity-layer"></div> */}
      {!loading ? (
        <>
          <div className="backDropImg">
            <MyImage src={url.backdroup_base_url + data?.backdrop_path} />
          </div>
          <div className="subjectDetails">
            <div className="left">
              <MyImage
                className={"posterImage"}
                src={url.backdroup_base_url + data?.poster_path}
              />
            </div>
            <div className="right">
              <div className="subjectTitle">
                {data?.title} ({dayjs(data?.release_date).format("YYYY")})
              </div>
              <span className="subjectTagLine">{data?.tagline}</span>
              <DetailsGenres data={data?.genres} />
              <div className="row">
                <DetailsCircleRating result={data?.vote_average} />
                <div
                  className="playbtn"
                  onClick={() => {
                    setShow(true);
                    setVideoid(video.key);
                  }}
                >
                  <PlayIcon />
                  <span className="trailer">Watch Trailer</span>
                </div>
              </div>
              <div className="overview">
                <div className="overviewTitle">Overview</div>
                <span className="overviewtext">{data?.overview}</span>
              </div>
              <div className="castInfoBox">
                <div className="boxinfo">
                  <div className="infomation">
                    <span className="textBold">Status: </span>
                    <span className="textinfo">{data.status}</span>
                  </div>
                  <div className="infomation">
                    <span className="textBold">Release Date: </span>
                    <span className="textinfo">
                      {dayjs(data.release_date).format("MMMM D,YYYY")}
                    </span>
                  </div>
                  <div className="infomation">
                    <span className="textBold">Runtime: </span>
                    <span className="textinfo">{runtime(data.runtime)}</span>
                  </div>
                </div>
                <hr />
                <div className="infomation">
                  <span className="textBlod">Director: </span>
                  <span className="textinfo">{director[0]?.name}</span>
                </div>
                <hr />
                <div className="infomation">
                  <span className="textBlod">Writer: </span>
                  <span className="textinfo">
                    {writer.map((item, i) => (
                      <span key={item.id}>
                        {item.name}
                        {writer.length - 1 !== i && ","}
                      </span>
                    ))}
                  </span>
                </div>
                {/* MAKE THIS CREATOR FIELD FOR TV SERIES */}

                {/* <div className="infomation">
                  <span className="textBlod">Writer: </span>
                  <span className="textinfo">
                    {writer.map((item, i) => (
                      <span key={item.id}>
                        {item.name}
                        {writer.length - 1 !== i && ","}
                      </span>
                    ))}
                  </span>
                </div> */}
                <hr />
              </div>
            </div>
          </div>
          <VideoPopup
            show={show}
            setShow={setShow}
            videoId={videoId}
            setVideoId={setVideoid}
          />
        </>
      ) : (
        <div style={{ color: "white" }}>Details are not loaded yet</div>
      )}
    </>
  );
};

export default DetailsBanner;
