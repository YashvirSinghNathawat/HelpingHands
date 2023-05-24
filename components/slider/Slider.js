import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Arrows from "./Arrows";
import imageDetails from "./sliderImage";
import styled from "styled-components";

const len = imageDetails.length - 1;

function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <SliderContainer>
      <SliderContent activeIndex={activeIndex} sliderImage={imageDetails} />
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  height: 90vh;
  width: 100vw;
`
export default Slider;