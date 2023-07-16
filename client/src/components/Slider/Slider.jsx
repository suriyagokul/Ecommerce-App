import React, { useState } from "react";

function Slider() {
  const data = ["/img/slider1.jpg", "/img/slider2.jpg", "/img/slider3.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    if (currentSlide === 0) {
      setCurrentSlide(2);
    } else {
      setCurrentSlide((prev) => prev - 1);
    }
  };
  const nextSlide = () => {
    if (currentSlide === 2) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto px-4 py-10 relative group">
      <div
        style={{
          backgroundImage: `url(${data[currentSlide]})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% auto",
        }}
        className="w-full h-full rounded-2xl bg-center bg-contain duration-500"
      ></div>
      <div className="" onClick={nextSlide}>
        <img
          src="https://img.icons8.com/ios/50/chevron-left.png"
          width={40}
          height={40}
          alt="chevronleft"
          className="hidden group-hover:block  absolute top-[50%] bg-cyan-500 hover:bg-cyan-600 px-2 py-2  left-5  drop-shadow-lg  rounded-full  cursor-pointer"
        />
      </div>

      <div onClick={prevSlide}>
        <img
          src="https://img.icons8.com/ios/50/chevron-right.png"
          width={40}
          height={40}
          alt="chevronright"
          className="hidden group-hover:block  absolute top-[50%] bg-cyan-500 hover:bg-cyan-600 px-2 py-2 drop-shadow-lg right-5  rounded-full  cursor-pointer"
        />
      </div>
    </div>
  );
}

export default Slider;
