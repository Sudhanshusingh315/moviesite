import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import "./deatilscircular.css";

const DetailsCircleRating = ({ result }) => {
  console.log(result);
  const value = +result?.toFixed(1);
  console.log(value);
  return (
    <div className="circleRatingD">
      <CircularProgressbar
        value={value}
        maxValue={10}
        text={value}
        styles={buildStyles({
          pathColor: value < 5 ? "red" : value < 7 ? "orange" : "green",
        })}
      />
    </div>
  );
};

export default DetailsCircleRating;
