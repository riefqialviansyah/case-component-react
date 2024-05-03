import Accordian from "../components/accordian/accordian";
import RandomColor from "../components/random-color/ramdom-color";
import StarRating from "../components/star-rating/star-rating";

export default function LayoutPage() {
  return (
    <>
      {/* Accordian component */}
      <Accordian />

      {/* Random color */}
      <RandomColor />

      {/* Srat rating component */}
      <StarRating />
    </>
  );
}
