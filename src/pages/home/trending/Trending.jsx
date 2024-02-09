import "../home.css";
import { SwitchingTabs } from "../../../components/switchinTabs/SwitchingTabs";
const Trending = () => {
  const onTabChange = (tab) => {};
  return (
    <>
      <div className="carouselSection">
        <span className="carouselTitle">Trending</span>
        <SwitchingTabs data={["Day", "Week"]} onTabChange={onTabChange} />
      </div>
    </>
  );
};

export default Trending;
