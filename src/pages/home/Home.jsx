import { Herobanner } from "./heroBanner/heroBanner";
import Trending from "./trending/Trending";
export function Home() {
  return (
    <>
      <div className="homepage">
        <Herobanner />
        <Trending />
        <div style={{ height: 1000 }}></div>
      </div>
    </>
  );
}
