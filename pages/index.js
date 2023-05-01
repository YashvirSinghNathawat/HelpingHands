import React from 'react'
import styled from 'styled-components'
import Slider from '../components/slider/Slider'

const index = () => {
  const slides = [
    { url: "http://localhost:3000/slider1.jpeg", title: "beach" },
    { url: "http://localhost:3000/slider2.jpg", title: "boat" },
    { url: "http://localhost:3000/slider3.jpg", title: "forest" },
    { url: "http://localhost:3000/slider4.jpg", title: "city" }
  ];
  return (
    <HomeContainer>
        <Slider slides={slides}/>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
`
export default index