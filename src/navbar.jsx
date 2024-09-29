import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavbarContainer = styled.nav`
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
z-index: 1000;

  

  h3{
  font-size: 25px;
  color: rgb(183, 83, 1);
  }

  button{
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: orange;
    color: white;
    font-size: 15px;

    &:hover{
      background-color: rgba(194, 126, 1, 0.721);
    }
  }
  
`;

const Logo = styled.img`
  height: 40px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled.a`
  color: #374151;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: #1f2937;
    text-decoration: underline;
    text-decoration-color: orange;

  }
`;

const SearchBar = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
`;

const SearchIcon = styled.span`
  position: absolute;
  right: 1rem;
  pointer-events: none;
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-right:40px
`;

const Icon = styled.span`
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #1f2937;
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      
      <h3>FoodieGo</h3>
      
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="/dish">Dishes</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
      <IconsContainer>
        <SearchBar>
          <SearchInput type="search" placeholder="Search" />
          <SearchIcon>🔍</SearchIcon>
        </SearchBar>
        <Icon><Link to="/cart">🛒</Link></Icon> 
        <Icon><Link to="/view">👤</Link></Icon> 
        <button><Link to="/signin">Sign In.</Link></button>
      </IconsContainer>
     
    </NavbarContainer>
  );
}

export default Navbar;














