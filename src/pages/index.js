import * as React from "react"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Project from "../components/Project"
import Seo from "../components/seo"
import { useState, useRef } from "react"
import { GlobalStyle } from "../components/styles/GlobalStyles"
import LoadWraper from '../components/Loader'
import { useEffect } from "react"
import { ParallaxProvider } from "react-scroll-parallax"





const IndexPage = () => {

  const [preloader, setPreloader] = useState(true);
  
  const [timer, setTimer] = useState(3);

  const id = useRef(null);


  const clear = () =>{
    window.clearInterval(id.current);
    setPreloader(false);
  }

useEffect(() => {
  id.current = window.setInterval(()=>{
    setTimer((timer) => timer-1)
  }, 1000)
  
}, [])

useEffect(() => {
  if(timer===0) {
    clear();
  }
}, [timer])

return (
  <>
  <GlobalStyle/>

  {preloader ? (
    <LoadWraper />
  ) : (
    <div>
      <ParallaxProvider>
  <Layout> 
    <Seo title="Home" />
    <Hero />
    <Project />
    <Footer />
 
  </Layout>
  </ParallaxProvider>
  </div>
  
  )}
  </>
)
}

export default IndexPage


