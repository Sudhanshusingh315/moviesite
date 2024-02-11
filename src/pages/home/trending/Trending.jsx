import "../home.css";
import { SwitchingTabs } from "../../../components/switchinTabs/SwitchingTabs";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Carousel } from "../../../components/carouselSection/Carousel";
const Trending = () => {
  const [endpoint, setEndpoint] = useState("day");
  const { data, loading } = useFetch(`/trending/movie/${endpoint}`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Day" ? "day" : "week");
  };
  return (
    <>
      <div className="carouselSection">
        <span className="carouselTitle">Trending</span>
        <SwitchingTabs data={["Day", "Week"]} onTabChange={onTabChange} />
        <Carousel data={data?.results} loading={loading} />
      </div>
    </>
  );
};

export default Trending;
