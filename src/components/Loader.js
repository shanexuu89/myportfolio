import React from 'react'
import styled from "styled-components"
import BgImage from '../images/banner.gif'
import { GlobalStyle } from "../components/styles/GlobalStyles"


function Loader() {
    return (
            
            <LoadWraper>
            <GlobalStyle/>
            <LoaderH1>Yun Xu</LoaderH1>
            <LoaderH2>Portfolio</LoaderH2>
            </LoadWraper>
          
    )
}

export default Loader

const LoadWraper = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   background: url(${BgImage});
   color: #9B988B;
   font-family: Montserrat;
   text-align: center;

`


const LoaderH1 = styled.div`
   font-size: 2.8vw;
   text-transform: uppercase;
   font-weight: 600;
`
const LoaderH2 = styled.div`
   font-size: 1.2vw;
   text-transform: uppercase;
   font-family: serif;
   font-weight: 400;
   font-style: italic;
   letter-spacing: 0.2rem;

`
