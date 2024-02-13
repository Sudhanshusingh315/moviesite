import { useSelector } from "react-redux";
import "./genres.css";
const Genres = ({ data }) => {
  const geners = useSelector((state) => state.home.genres);
  return (
    <>
      <div className="genres">
        {data.map((id) => {
          return (
            <div className="typeofG" key={data.id}>
              {geners[id].name}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Genres;
