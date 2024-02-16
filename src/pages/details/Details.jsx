import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "./details.css";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./detailsCast/Cast";
import VideoSection from "./videosection/Videotrailer";
export function Details() {
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creaditsLoading } = useFetch(
    `/${mediaType}/${id}/credits`
  );
  console.log("data.results from main", data?.results);
  console.log("crew details from main", credits);
  return (
    <>
      {!loading ? (
        <>
          <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
          <Cast data={credits.cast} loading={creaditsLoading} />
          {/* Remove the section below after this */}
          <VideoSection data={data} loading={loading} />
          <hr />
          <div style={{ height: 1000 }}></div>
        </>
      ) : (
        <div>data will be loading</div>
      )}
    </>
  );
}
