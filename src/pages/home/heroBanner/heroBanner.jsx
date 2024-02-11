import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // important notes to cover
import { useSelector } from "react-redux";
import useFetch from "../../../hooks/useFetch";
import { MyImage } from "../../../components/lazyloading/image";
import ContentWrapper from "../../../components/contentWrapper/Contentwrapper";
import "./heroBanner.css";
export function Herobanner() {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // creating the instance of useNavigate();
  const url = useSelector((state) => state.home.url);
  const { data, loading } = useFetch("/movie/upcoming"); // important note to cover (custom hooks)

  // for generating a random number between 0-20
  var currentDate = new Date();
  var milliseconds = currentDate.getMilliseconds();
  var randomNumber = (milliseconds % 20) + 1;

  useEffect(() => {
    const bg =
      url.backdroup_base_url + data?.results?.[randomNumber]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  function searchQueryHandler(e) {
    console.log(e);
    if (e.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  }

  return (
    <>
      <div className="herobanner">
        <div className="backdrop-img">
          <MyImage src={background} />
        </div>
        <div className="opacity-layer"></div>
        <ContentWrapper>
          <div className="heroBannerContent">
            <span className="title">Welcome</span>
            <span className="subTitle">
              Millions of Moives, Tv shows and people to discover. Explore Now
            </span>
            <div className="searchInput">
              <input
                onKeyUp={(e) => {
                  searchQueryHandler(e);
                }}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search for Movies for Tv Show.."
              />
              <button className="search">Search</button>
            </div>
          </div>
        </ContentWrapper>
      </div>
    </>
  );
}
