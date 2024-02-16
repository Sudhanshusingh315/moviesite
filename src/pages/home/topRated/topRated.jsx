import "../home.css";
import { SwitchingTabs } from "../../../components/switchinTabs/SwitchingTabs";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Carousel } from "../../../components/carouselSection/Carousel";
const TopRated = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/top_rated`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <>
      <div className="carouselSection">
        <span className="carouselTitle">Top Rated</span>
        <SwitchingTabs data={["Movies", "Tv"]} onTabChange={onTabChange} />
        <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
      </div>
    </>
  );
};

export default TopRated;
