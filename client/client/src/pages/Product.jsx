import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import React from "react";
import Newsletter from "../components/Newsletter";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { publicRequest } from "../requestMethods";
import {addProduct} from "../redux/cartRedux";
import {useDispatch} from "react-redux";
import { Desc, Container, Wrapper, ImgContainer, Image, InfoContainer, Title, Price, FilterContainer, Filter, FilterTitle, FilterColor, FilterSize, FilterSizeOption, AddContainer, AmountContainer, Amount, Button } from "./styles/product"

const Product = () => {
  const location = useLocation ();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();


  useEffect(() => {
    const getproduct = async () => {
      try {
        const res = await publicRequest.get("/products/find/" + id);
        setProduct(res.data);
      } catch {}
    };
    getproduct()
  }, [id])

  const handleQuantity = (type) => {
    if (type === "dec"){
      quantity>1 && setQuantity(quantity-1)
    } else {
      setQuantity(quantity+1)
    }
  };

  const handleClick = () => {
    //update cart
    dispatch(addProduct({...product, quantity, color, gender})
    );
  };

  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src= {product.img}/>
        </ImgContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Desc>
            {product.desc}
          </Desc>
          <Price>€ {product.price}</Price>
          <FilterContainer>
            <Filter>
            <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
              <FilterColor color={c} key = {c} onClick= {() => setColor(c)}/>
              ))}
            </Filter>   
            <Filter>
              <FilterTitle>Gender</FilterTitle>
              <FilterSize onChange={(e) =>setGender(e.target.value)}>
                {product.gender?.map((g) =>(
                  <FilterSizeOption key={g}>{g}</FilterSizeOption>
               ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity("dec")}/>
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity("inc")}/>
            </AmountContainer>
            <Button onClick={handleClick}>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
