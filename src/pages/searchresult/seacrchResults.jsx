import InfiniteScroll from "react-infinite-scroll-component";
import MovieCard from "../../components/movieCard/MovieCard";
import "./searchResults.css";
import Spinner from "../../components/spinner/Spinner";
import { fetchingApi } from "../../utils/api";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Searchresults = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loadin, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchingApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      setData(res);
      setPageNum((prev) => prev + 1);
      setLoading(false);
    });
  };
  const fetchNextData = () => {
    setLoading(true);
    fetchingApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
      if (data?.results) {
        setData((prevData) => ({
          ...prevData,
          results: [...prevData?.results, ...res?.results],
        }));
        console.log(data);
      } else {
        setData(res);
      }
    });
    setPageNum((pres) => pres + 1);
  };
  useEffect(() => {
    fetchInitialData();
  }, [query]);

  return (
    <div className="searchResultsPage">
      {/* {loadin && <Spinner initial={true} />} */}
      {!loadin && (
        <div>
          {data?.results.length > 0 ? (
            <>
              <div className="pageTitle">
                {`Search ${
                  data?.total_results > 1 ? "results" : "result"
                } of '${query}'`}
              </div>
              <InfiniteScroll
                className="content"
                dataLength={data?.results.length}
                next={fetchNextData}
                inverse={true}
                hasMore={pageNum <= data?.total_pages}
                loader={<h4 style={{ color: "white" }}>Loading....</h4>}
              >
                {data?.results?.map((item, index) => {
                  if (item?.media_type === "person") return;
                  return (
                    <MovieCard key={index} data={item} fromSearch={true} />
                  );
                })}
              </InfiniteScroll>
            </>
          ) : (
            <span className="resultNotFound">Sorry, No results were found</span>
          )}
        </div>
      )}
    </div>
  );
};
