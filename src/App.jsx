import { useState, useEffect } from "react";
import { fetchingApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { getApiConfiguration } from "./homeSlice/homeSlice";
import { pageNotFound } from "./pages/404/pageNotFound";
import { Details } from "./pages/details/Details";
import { Explorer } from "./pages/explorer/Explorer";
import { Home } from "./pages/home/Home";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footers/Footer";
import { Searchresults } from "./pages/searchresult/seacrchResults";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fecthApiConfig();
  }, []);

  const fecthApiConfig = () => {
    const data = fetchingApi("/configuration");
    data.then((result) => {
      const url = {
        backdroup_base_url: result.images.base_url + "original",
        poster_base_url: result.images.base_url + "original",
        profile: result.images.base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<Searchresults />} />
        <Route path="explore/:mediaType" element={<Explorer />} />
        <Route path="*" element={<pageNotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;