import React from 'react'
import styled from 'styled-components'
import { menuData } from './data/MenuData'
import {Link} from "gatsby"
import Close from "../images/close.svg"

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #9B988B;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
  left: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 2.8rem;
  background: transparent;
  cursor: pointer;
  outline: none;
`
const CloseIcon = styled.i`
  background-image: url(${Close});
  width: 35px;
  height: 35px;
  display: block;


`
const DropdownWrapper = styled.div``
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 110px);
  text-align: center;
  
  @media screen and (max-width: 480px) {
      grid-template-rows: repeat(4, 110px);
  }

`
const DropdownLink = styled(Link)`
  display: flex;
  color: #171717;
  align-items: center;
  justify-content: center;
  font-size: 2.8rem;
  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
      color: #B4B1A3; 

  }

`


const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} onClick={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <DropdownWrapper>
               <DropdownMenu>
                   {menuData.map((item, index) => (
                       <DropdownLink to={item.link} key={index}>
                           {item.title}
                       </DropdownLink>
                   ))}
               </DropdownMenu>
           </DropdownWrapper>
        </DropdownContainer>
    )
}

export default Dropdown
