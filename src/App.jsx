import { useState, useEffect } from "react";
import { fetchingApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getApiConfiguration, getGeners } from "./homeSlice/homeSlice";
import { pageNotFound } from "./pages/404/pageNotFound";
import { Details } from "./pages/details/Details";
import { Explorer } from "./pages/explorer/Explorer";
import { Home } from "./pages/home/Home";
import { Header } from "./components/header/Header";
import Footer from "./components/footers/Footer";
import { Searchresults } from "./pages/searchresult/seacrchResults";
import "./App.css";
import axios from "axios";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fecthApiConfig();
    genresCall();
  }, []);

  const fecthApiConfig = () => {
    const data = fetchingApi("/configuration");
    data
      .then((result) => {
        const url = {
          backdroup_base_url: result.images.base_url + "original",
          poster_base_url: result.images.base_url + "original",
          profile: result.images.base_url + "original",
        };

        dispatch(getApiConfiguration(url));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  // Api call for geners

  const genresCall = async () => {
    let promises = [];
    let endpoints = ["tv", "movie"];
    const allGenres = {};
    endpoints.map((url) => {
      promises.push(fetchingApi(`/genre/${url}/list`));
    });
    const data = await Promise.all(promises);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });
    console.log(allGenres);
    dispatch(getGeners(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<Searchresults />} />{" "}
        {/* this is is presernt in app.js */}
        <Route path="explore/:mediaType" element={<Explorer />} />
        <Route path="*" element={<pageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
