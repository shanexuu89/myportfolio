import React from 'react'
import styled from 'styled-components'
import BgImage from '../images/banner.gif'
import Smile from '../images/smile.svg'



function Footer() {
    return (
        <ContactContainter id="footer">
            <Icon><img src={Smile}></img></Icon>
            <Contacts><a href="mailto:shanexu89@hotmail.com" target="_blank">Get in touch</a></Contacts>
            <CopyRight>YUN XU 2022. ALL RIGHTS RESERVED</CopyRight>
        </ContactContainter>
    )
}

export default Footer


const ContactContainter = styled.div`

   display: flex;
   background: url(${BgImage});
   object-fit: cover;
   background-repeat: repeat;
   width: 100vw;
   min-height: 80%;
   text-align: center;
   justify-content: center;
   padding: 10rem 0;
   flex-direction: column;
   position: relative;
  

`

const Icon = styled.div`
   
   width: 100vw;
     img {
        width: 8rem;
        height: 8rem;


        @media screen and (max-width: 540px) {
            width: 6.5rem;
            height: 6.5rem;
    
         }
     }
     
`
const Contacts = styled.div`

a{
    color: #9B988B;
    font-weight: 700;
    font-size: 8rem;
    text-transform: uppercase;
    font-style: italic;
    text-decoration: underline;
    opacity: 0.6;
    transition: opacity .35s cubic-bezier(.77, 0, 0.175, 1);
    
    &:hover {
        
        cursor: pointer;
        font-weight: 700;
        text-decoration: none;
        opacity: 1;
        transition: opacity .35s cubic-bezier(.77, 0, 0.175, 1);
        
      }

      @media screen and (max-width: 768px) {
        font-size: 6rem;
        

      @media screen and (max-width: 540px) {
         font-size: 3.5rem;


      }

    }
    
`

const CopyRight = styled.div`
    height: 20px;
    color: #9B988B;
    font-weight: 400;
    font-size: 0.8rem;
    text-transform: uppercase;
    position: absolute;
    text-align: center;
    bottom: 10px;
    width: 100vw;
`