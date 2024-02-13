import { Herobanner } from "./heroBanner/heroBanner";
import Popular from "./popular/Popular";
import TopRated from "./topRated/topRated";
import Trending from "./trending/Trending";
export function Home() {
  return (
    <>
      <div className="homepage">
        <Herobanner />
        <Trending />
        <Popular />
        <TopRated />
      </div>
    </>
  );
}
