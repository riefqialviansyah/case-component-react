import Accordian from "../components/accordian/accordian";
import ImageSlider from "../components/image-slider/image-slider";
import LoadMoreData from "../components/load-more-data/load-mor-data";
import RandomColor from "../components/random-color/ramdom-color";
import StarRating from "../components/star-rating/star-rating";

export default function LayoutPage() {
  return (
    <>
      {/* Accordian component */}
      <Accordian />

      {/* Random color */}
      <RandomColor />

      {/* Star rating component */}
      <StarRating />

      {/* Image slider */}
      <ImageSlider url={"https://picsum.photos/v2/list"} />

      {/* Load More Data */}
      <LoadMoreData />
    </>
  );
}
