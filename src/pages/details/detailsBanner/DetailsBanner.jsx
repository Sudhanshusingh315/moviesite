import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { MyImage } from "../../../components/lazyloading/image";
import { useSelector } from "react-redux";
import "./detailsbanner.css";
import dayjs from "dayjs";
import DetailsGenres from "../detailsGenres/DetailGenres";
import DetailsCircleRating from "../detailsCircular/DetailsCircular";
const DetailsBanner = () => {
  const { mediaType, id } = useParams();
  console.log("this are from params", mediaType, id);
  const { data, loading } = useFetch(`/${mediaType}/${id}`);
  const url = useSelector((state) => state.home.url);
  // console.log("data", data);
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
              </div>
            </div>
          </div>
        </>
      ) : (
        <div style={{ color: "white" }}>Details are not loaded yet</div>
      )}
    </>
  );
};

export default DetailsBanner;
