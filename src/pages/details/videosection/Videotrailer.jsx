import { useState } from "react";

import "./style.css";

import VideoPopup from "../../../components/videoPopup/VideoPopUp";
import { MyImage } from "../../../components/lazyloading/image";
import { DetailsPlayIcon } from "../detailsPlayicon/DetailsPlayicon";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="skItem">
        <div className="thumb skeleton"></div>
        <div className="rowvid skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };

  return (
    <div className="videosSection">
      <div>
        <div className="sectionHeading">Official Videos</div>
        {!loading ? (
          <div className="videos">
            {data?.results?.map((video) => (
              <div
                key={video.id}
                className="videoItem"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <MyImage
                    className={"Ytimage"}
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                  />
                  <DetailsPlayIcon />
                </div>
                <div className="videoTitle">{video.name}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="videoSkeleton">
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </div>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
