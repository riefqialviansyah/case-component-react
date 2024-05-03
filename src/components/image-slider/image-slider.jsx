import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";

export default function ImageSlider({ url, limit = 10 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errMessage, setErrMessage] = useState("");
  const [isLoading, setIsloading] = useState(false);

  async function fetchImage(getUrl) {
    setIsloading(true);
    try {
      const response = await fetch(getUrl + `?limit=${limit}`);
      const data = await response.json();
      setImages(data);
      setIsloading(false);
    } catch (error) {
      setErrMessage(error.message);
      setIsloading(false);
    }
  }

  function handlePreviosSlide() {
    setCurrentSlide(
      currentSlide - 1 == -1 ? images.length - 1 : currentSlide - 1
    );
  }

  function handleNextSlide() {
    setCurrentSlide(currentSlide + 1 == images.length ? 0 : currentSlide + 1);
  }

  useEffect(() => {
    if (url != "") fetchImage(url);
  }, [url]);

  if (isLoading) {
    return (
      <>
        <div>Loading</div>
      </>
    );
  }

  if (errMessage != "") {
    return <div>Error occured! {errMessage}</div>;
  }

  return (
    <>
      <div className="contentImgSlider">
        <div className="text-4xl font-semibold italic mb-2">Image Slider</div>
        <div className="containerImageSlider">
          <div className="w-12 h-12 bg-white rounded-full border flex justify-center items-center absolute left-1">
            <BsArrowLeftCircleFill size={30} onClick={handlePreviosSlide} />
          </div>
          {images.length > 0 &&
            images.map((image, index) => {
              return (
                <img
                  src={image.download_url}
                  alt={image.download_url}
                  key={index}
                  className={
                    currentSlide == index ? "activeImage" : "inactiveImage"
                  }
                />
              );
            })}
          <div className="w-12 h-12 bg-white rounded-full border flex justify-center items-center absolute right-1">
            <BsArrowRightCircleFill size={30} onClick={handleNextSlide} />
          </div>
          <div className="absolute bottom-1 flex gap-2">
            {images.length > 0 &&
              images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className={
                      currentSlide == index
                        ? "indicatorImage"
                        : "indicatorImage inactiveIndicatorImage"
                    }
                  ></div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}
