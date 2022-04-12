import React, { useState } from "react";
import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { IconContext } from 'react-icons';
import {MobileIcon,  Menu, MenuItem, MenuItemLink,  Logo ,LogoContainer, Container, Wrapper, SearchCont} from './styles/NavBar'


const Navbar = () => {
  const quantity  = useSelector(state => state.cart.quantity);
  const [showMobileMenue, setShowMobileMenue] = useState(false);
  
  const open = showMobileMenue;
  
  return (
    <Container>
      <Wrapper>
        <IconContext.Provider value= {{style: {fontSize: "2em"}}} >
        <LogoContainer>
          <Link to='/'>
            <Logo>GEMOS.</Logo>
          </Link>         
          <p>Language-</p>
          <p>EN</p>          
        </LogoContainer>

        <MobileIcon onClick={()=> setShowMobileMenue(!showMobileMenue)}>
          <FaBars/>
        </MobileIcon>

      <Menu open> 

        <SearchCont>
          <input placeholder="Search" />
          <Search/>
        </SearchCont>       

        <MenuItem>
          <Link to= '/signup'>
            <MenuItemLink>REGISTER</MenuItemLink>        
          </Link>        
        </MenuItem>

        <MenuItem>
          <Link to= '/login'>
            <MenuItemLink>SIGN IN</MenuItemLink>        
          </Link>        
        </MenuItem>

        <MenuItem>
          
            <Link to= '/cart'>              
              <MenuItemLink>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge> 
              </MenuItemLink>                                 
            </Link>  
          
                
        </MenuItem>

      </Menu>
      </IconContext.Provider>
      </Wrapper>
      
    </Container>
  );
};

export default Navbar;