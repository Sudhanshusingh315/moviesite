import "./details.css";
import DetailsBanner from "./detailsBanner/DetailsBanner";
export function Details() {
  return (
    <>
      <DetailsBanner />
      <div>Details sections</div>
      {/* Remove the section below after this */}
      <div style={{ height: 1000 }}></div>
    </>
  );
}
