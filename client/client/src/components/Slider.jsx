import React from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { sliderItems } from "../data";
import { Container, Desc, Title, InfoContainer, ImgContainer, Image, Wrapper, Slide, ArrowRight, ArrowLeft, Button } from './styles/Slider';


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <ArrowLeft direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </ArrowLeft>

      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img}/>
          </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>

      <ArrowRight direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </ArrowRight>

    </Container>
  );
};

export default Slider;
