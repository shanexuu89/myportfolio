import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BgImage from '../images/banner.gif'
import { GlobalStyle } from "../components/styles/GlobalStyles"


const NotFoundPage = () => (
  <Layout>
    <GlobalStyle/>
    <Seo title="404: Not found" />
    <NotFound>
    <Content404>
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Content404>
    </NotFound>
  </Layout>
   
    
)

export default NotFoundPage


const NotFound = styled.div`
    color: #9B988B;
    background: url(${BgImage});
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-repeat: repeat;
    overflow: hidden;


`

const Content404 = styled.div`
    padding: 15rem 10rem;
    justify-content: center;
    align-items: center;
    text-align: center;

  h1 {
    font-size: 5.5rem;
  }

  p {
    font-size: 1.2rem;
  }

`



