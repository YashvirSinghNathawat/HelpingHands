import React from "react";

function SliderContent({ activeIndex, sliderImage }) {
  return (
    <section style={{
      width: '100%',
      height: '100%'
    }}>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          alt={slide.title}
          className={index === activeIndex ? "slides active" : "inactive"}
         style={{
          width: '100%',
      height: '100vh'
         }}>
          <img className="slide-image" src={slide.urls} alt="" />
        </div>
      ))}
    </section>
  );
}

export default SliderContent;