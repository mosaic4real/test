import React from "react";
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room,  Twitter,} from "@material-ui/icons";
import { CenterCont, Image ,ContactItem , ListItem, ListUl, Title, Container, LeftDiv, Desc, SocialContainer, SocialIcon} from './styles/footer'

const Footer = () => {
  return (
    <Container>
      <LeftDiv>
        <h1>GEMOS.</h1>
        <Desc>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata .
        </Desc>

        <SocialContainer>

          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>

        </SocialContainer>
      </LeftDiv>

      <CenterCont>
        <Title>Useful Links</Title>
        <ListUl>

          <ListItem>Cart</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Combo</ListItem>
          <ListItem>Speakers</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Terms</ListItem>

        </ListUl>
      </CenterCont>

      <CenterCont>
      <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 24 Gemos Straße, 21073 Germany 
        </ContactItem>

        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +49 234 56 78
        </ContactItem>

        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> gemosguitar@gmail.com
        </ContactItem>

        <Image src="https://i.ibb.co/Qfvn4z6/payment.png"/>

      </CenterCont>
    </Container>
  );
};

export default Footer;
