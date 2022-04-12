import React, { useState } from "react";
import { login } from "../redux/apiCalls";
import {useDispatch, useSelector} from "react-redux";
import { Container, Wrapper, Title, Form, Input, Button, Link } from "./styles/login" 

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const {isFetching, error}  = useSelector((state) => state.user);
  const handleClick = (e) => {
    e.preventdefault()
    login(dispatch,{username, password});
  };
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" onChange ={(e) => setUsername(e.target.value)}/>
          <Input placeholder="password" onChange ={(e) => setPassword(e.target.value)} />
          <Button onClick = {handleClick} disabled ={isFetching}>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
