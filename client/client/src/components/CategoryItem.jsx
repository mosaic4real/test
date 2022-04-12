import React from "react";
import {Link} from "react-router-dom";
import {Container, Img, Info, Title, Button} from './styles/categoryItem'

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to ={`/products/${item.cat}`}>
      <Img src= {item.img}/>
      <Info>
      <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  );
};

export default CategoryItem;
