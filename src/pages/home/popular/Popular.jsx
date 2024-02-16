import "../home.css";
import { SwitchingTabs } from "../../../components/switchinTabs/SwitchingTabs";
import { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Carousel } from "../../../components/carouselSection/Carousel";
const Popular = () => {
  const [endpoint, setEndpoint] = useState("movie");
  const { data, loading } = useFetch(`/${endpoint}/popular`);
  const onTabChange = (tab) => {
    setEndpoint(tab === "Movies" ? "movie" : "tv");
  };
  return (
    <>
      <div className="carouselSection">
        <span className="carouselTitle">What&apos;s Popular</span>
        <SwitchingTabs data={["Movies", "Tv"]} onTabChange={onTabChange} />
        <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
      </div>
    </>
  );
};

export default Popular;
