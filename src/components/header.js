import * as React from "react"
import { useState } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { menuData } from "./data/MenuData"
import Logo from "../images/logo.svg"
import Bar from "../images/bar.svg"
import {motion} from 'framer-motion'
import { AnchorLink } from 'gatsby-plugin-anchor-links';



const Header = ({ toggle }) => {


return (
  <Nav
    animate={{y:0, opacity: 1}}
    initial={{y: -70, opacity: 0}}
    transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }}
  >
    <NavLink to="/">
      <img src={Logo} alt="Yun Xu"/>
    </NavLink>
    <Bars onClick={toggle}/>
    <NavMenu>
      {menuData.map((item, index) => (
       <NavLinks> 
         <AnchorLink to={item.link} key={index} style={{ textDecoration: 'none', color: 'white'}}>
          <span>{item.title}</span>
        </AnchorLink>
        </NavLinks>
       
      ))}
       
      </NavMenu>
  </Nav>
)
}

export default Header
 

const Nav = styled(motion.nav)`
  background: transparent;
  height: 80px;
  display: flex;
  top: 0;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1400px) / 2);
  z-index: 10;
  position: fixed;
` 

const NavLink = styled(Link)`
  color: #9B988B;
  display: flex;
  font-weight: 500;
  text-transform: uppercase;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  
  img {
    width: 45px;
    height: 45px;
    transition: transform 0.6s ease-in-out;
  }
  img:hover {
    transform: rotate(180deg);
  }
`

const Bars = styled.i`
  display: none;

  @media screen and (max-width: 768px){
    background-image: url(${Bar});
    background-size: contain;
    height: 24px;
    width: 50px;
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-70%, 75%);
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  align-items: right;
  margin-right: -48px;
  padding: 1rem 1rem;

  
  @media screen and (max-width: 768px) {
    display: none;
  }
}
`
const NavLinks = styled(Link)` 
  display: block;
  color: #9B988B;
  font-weight: 500;
  text-transform: uppercase;
  align-items: right;
  justify-content: right;
  text-decoration: none;
  padding: 0.2rem 2rem;
  cursor: pointer;
  
  

a {
  text-decoration: none;
  color: #9B988B;


    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
       
    }
}
 
  `