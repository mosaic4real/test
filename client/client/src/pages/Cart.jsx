import React, { useEffect, useState } from "react";
import { Add, Remove } from "@material-ui/icons";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux';
import StripeCheckout from "react-stripe-checkout";
import { userRequest } from "../requestMethods";
import { Container, Wrapper, Title, Top, TopButton, TopText, TopTexts, Bottom, Button, Info, Product, ProductDetail, Image, Details, ProductName, ProductId, ProductColor, ProductSize, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr, Summary, SummaryTitle, SummaryItem, SummaryItemText, SummaryItemPrice} from "./styles/cart"

const KEY = process.env.REACT_APP_STRIPE;


const Cart = () => {
  const cart = useSelector(state => state.cart);
  const [stripeToken, setStripeToken] = useState(null);
  // const history = useHistory();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
     const makeRequest = async () => {
      
       try {
        const res = await userRequest.post("/checkout/payment", {
          tokenId : stripeToken.id,
          amount: cart.total * 100, 
        });
        // history.push("/success", {data:res.data});
       } catch {}
     };
     stripeToken && makeRequest();
  }, [stripeToken, cart.total])
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            {/* <TopText>Your Wishlist (0)</TopText> */}
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cart.products.map(product =>(
              <Product>
              <ProductDetail>
                <Image src = {product.img}/>
                <Details>
                  <ProductName>
                    <b>Product:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                  <ProductColor color={product.color} />
                  <ProductSize>
                    <b>Gender:</b> {product.gender}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>€ {product.price*product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
            ))}   
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>€ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>€ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>€ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>€ {cart.total}</SummaryItemPrice>
            </SummaryItem>
              <StripeCheckout
              name= "GEMOS"
              image = "https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description= {`Your total is € ${cart.total}`}
              amount = {cart.total*100}
              token = {onToken}
              stripeKey = {KEY}
              >
            <Button>CHECKOUT NOW</Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
