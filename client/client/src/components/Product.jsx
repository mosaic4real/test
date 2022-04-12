import React from "react";
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined,
} from "@material-ui/icons";
import { Link } from 'react-router-dom';
import { Container, Circle, Image, IconCont, InfoCont } from './styles/product';


const Product = ({ item }) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.img}/>

      <InfoCont>
        <IconCont>
          <ShoppingCartOutlined />
        </IconCont>

        <IconCont>
          <Link to = {`/product/${item._id}`}>
            <SearchOutlined/>
          </Link>
        </IconCont>

        <IconCont>
          <FavoriteBorderOutlined />
        </IconCont>

      </InfoCont>
    </Container>
  );
};

export default Product;
