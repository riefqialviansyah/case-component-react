import { FaStar } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";

export default function StarRating({ noOfStars = 8 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleOnClick(indexStar) {
    setRating(indexStar);
  }

  function handleOnMouserMove(indexStar) {
    setHover(indexStar);
  }

  function handleOnMouseLeave() {
    setHover(rating);
  }

  return (
    <>
      <h3 className="text-center text-4xl font-bold italic">Star rating</h3>
      <div className="contentRating">
        {[...Array(noOfStars)].map((_, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              size={50}
              onClick={() => {
                handleOnClick(index);
              }}
              onMouseMove={() => {
                handleOnMouserMove(index);
              }}
              onMouseLeave={() => {
                handleOnMouseLeave();
              }}
            />
          );
        })}
      </div>
    </>
  );
}
