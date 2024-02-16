import { useSelector } from "react-redux";

import "./cast.css";

import { MyImage } from "../../../components/lazyloading/image";

const Cast = ({ data, loading }) => {
  const { url } = useSelector((state) => state.home);

  const skeleton = () => {
    return (
      <div className="skItem">
        <div className="circle skeleton"></div>
        <div className="row skeleton"></div>
        <div className="row2 skeleton"></div>
      </div>
    );
  };
  return (
    <div className="castSection">
      <div className="holdingthemtogether">
        <div className="sectionHeading">Top Cast</div>
        {!loading ? (
          <div className="listItems">
            {data?.map((item) => {
              let imgUrl = item.profile_path
                ? url.profile + item.profile_path
                : "../../../../meow.jpeg";
              return (
                <div key={item.id} className="listItem">
                  <div className="profileImg">
                    <MyImage src={imgUrl} className={"castImage"} />
                  </div>
                  <div className="name">{item.name}</div>
                  <div className="character">{item.character}</div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="castSkeleton">
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
            {skeleton()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cast;
