// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

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
      if (data.results) {
        setData({
          ...data,
          results: [...data.results, ...res.results],
        });
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
      {loadin && <Spinner initial={true} />}
    </div>
  );
};
