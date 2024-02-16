import { useSelector } from "react-redux";
import "./style.css";
const DetailsGenres = (data) => {
  const values = data.data;
  const geners = useSelector((state) => state.home.genres);
  return (
    <>
      <div className="genresD">
        {values?.map((item) => {
          return (
            <div className="typeofGD" key={data.id}>
              {geners[item.id].name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default DetailsGenres;
