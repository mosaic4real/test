import React from "react";
import { Send } from "@material-ui/icons";
import { Container, Title, Desc, InputContainer, Input, Button} from './styles/newsletter';

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>

      <Desc>Get timely updates from your favorite artist guitar.</Desc>

      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send/>
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
