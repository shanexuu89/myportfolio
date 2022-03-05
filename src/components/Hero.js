import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'
import BgImage from '../images/banner.gif'
import Portrait from '../images/portrait.png'
import { useEffect } from "react"
import { useState, useRef } from "react"
import { useInView } from 'react-intersection-observer'
import { useAnimation } from 'framer-motion'



const Hero = () => {

  const container = {
    show: {
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const item = {
    hidden: {
        opacity: 0,
        y: 70,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1.6,
        },
        
    },
    exit: {
      opacity: 0,
      y: -200,
    }
    
};

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 1,

  });
  const animation = useAnimation();

  useEffect(() => {
    if(inView){
      animation.start('show');
    }
     if (!inView) {
      animation.start('hidden');
     }
  }, [animation, inView]);


    return (
        
        <HeroContainter id="hero">
            <HeroBg>
                <Banner />
            </HeroBg>
            <HeroContent>
                <HeroItems  
                variants={container}
               animate="show"
               initial="hidden"
               >
                   <HeroH1 variants={item} >Hi, I'm</HeroH1>
                   <HeroH1 variants={item} >Yun Xu.</HeroH1>
                </HeroItems>
                <AboutContent variants={container}
               animate={animation}
               initial="hidden" 
               
               >
                 <AboutH2 ref={ref} variants={item}>I’m a Web <span>Developer</span> and <span>Designer</span>, passionate about creating <b>Appealing</b>, <b>Accessible</b> and <b>User-friendly</b> websites. </AboutH2>
                 <AboutList>

                   <AboutContainer> 
                   <AboutImage variants={item}><img src={Portrait}></img></AboutImage>
                     <AboutH3 variants={item} >I’m currently seeking a full-time software developer position to continue refining my skills with the right company.</AboutH3>
                     <AboutH3 variants={item} >If you’re interested in working together, <a href="mailto:shanexu89@hotmail.com" target="_blank"> Get in touch!</a></AboutH3>

                   </AboutContainer>

                 </AboutList>
                 
                </AboutContent>
            </HeroContent>
        </HeroContainter>
    )
}

export default Hero



const HeroContainter = styled(motion.div)`
   display: flex;
   justify-content: center;
   align-items: center;
   padding: 0 0rem;

   position: relative;
   color: #171717;
   overflow: hidden;
`
const HeroBg = styled.div`
   position: aboslute;
   top: 0;
   bottom: 0;
   right: 0;
   width: 100%;
   height: 100%;
   overflow: hidden;
`
const Banner = styled.div`
   background: url(${BgImage});
   position: absolute;
   top: 0;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 100%;
   object-fit: cover;
   background-repeat: repeat;
`


const HeroContent = styled.div`
    z-index: 3;
    max-height: 100%;
    padding: 12rem calc((100vw - 100px) / 2);
    margin-bottom: 10rem;


`

const HeroItems = styled(motion.div)`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   text-align: center;
   align-items: center:
   height: 100vh;
   max-height: 100%;
   padding: 0 auto;
   color: #9B988B;
   line-height: 0.95;
`
const HeroH1= styled(motion.h1)`

   font-size: 10.5rem;
   font-weight: 700;
   text-transform: uppercase;


  @media screen and (max-width: 768px) {
      font-size: 8rem;
      line-height: 1.3;
      font-weight: 700;
      
    @media screen and (max-width: 540px) {
        font-size: 4rem;
        line-height: 1.3;
        font-weight: 700;
        
  } 
`

const AboutContent = styled(motion.div)`
  display: inline-block;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15rem;
  width: 78vw;


  @media screen and (max-width: 768px) {
    width: 80vw;
    margin-top: 10rem;

`

const AboutH2 = styled(motion.h2)`

  font-size: 4.1rem;
  font-weight: 600;
  color: #9B988B;
  line-height: 1.3;
  margin-bottom: 2.2rem;
  text-transform: uppercase;
  line-height: 1.3;
  

  span {
      font-weight: 600;
      -webkit-text-fill-color: #171717; 
      -webkit-text-stroke: 1px #9B988B;
      opacity: 0.6;
     



      &:hover {
        cursor: pointer;
        -webkit-text-fill-color: #9B988B;
        opacity: 1;
        transition: opacity .35s cubic-bezier(.77, 0, 0.175, 1);
      }
  }

  b {
    font-style: italic;
    opacity: 0.6;
    -webkit-text-stroke: none;
    transition: opacity .35s cubic-bezier(.77, 0, 0.175, 1);
    font-family: "Playfair Display";
    text-transform: none;
    font-weight: 400;


    &:hover {
      cursor: pointer;
      text-decoration: none;
      opacity: 1;
      transition: opacity .35s cubic-bezier(.77, 0, 0.175, 1);
      text-decoration: underline;

    }
  
}
  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
    line-height: 1.3;
  }
  @media screen and (max-width: 540px) {
      font-size: 2rem;
      line-height: 1.3;
  }


`
const AboutList = styled(motion.div)`

  width: 100%;
  height: 100%;
  margin-top: 40vh;
  padding: 0rem 0rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;


  @media screen and (max-width: 768px) {
    margin-top: 20vh;
  }

`
const AboutImage = styled(motion.div)`
  position: absolute;
  left: 68vw;
  top: 67%;  
  img {
    width: 240px;
    height: 320px;
    transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
    filter: grayscale(100%) sepia(20%) brightness(80%);
    &:hover {
      filter: none;
      cursor: pointer;
  }

  
  
}


@media screen and (max-width: 768px) {
  position: relative;
  left: 0;
  bottom: 10vh;
  img {

    width: 216px;
    height: 288px;
    transition: all 1s cubic-bezier(0.77, 0, 0.175, 1);
    filter: grayscale(100%) sepia(20%) brightness(80%);
    &:hover {
      filter: none;
      cursor: pointer;
  }

}
`


const AboutContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  text-align: left;
  left: 10%;  
  
@media screen and (max-width: 768px) {
  width: 100vw;
  left: 0;  
  justify-content: center;
  align-items: center;
  
}
} 
`
const AboutH3 = styled(motion.h3)`
  width: 50%;
  display: block;
  font-size: 1.6rem;
  font-weight: 400;
  color: #9B988B;
  line-height: 1.6;
  margin-bottom: 2rem;

  text-transform: uppercase;


  a {
    font-family: "Playfair Display";
    text-transform: none;

    color: #9B988B;
    font-weight: 400;
      text-decoration: underline;
      font-style: italic;
      opacity: 0.6;
      transition: opacity .35s cubic-bezier(.77, 0, 0.175, 1);


      &:hover {
        cursor: pointer;
        text-decoration: none;
        opacity: 1;
        transition: opacity .35s cubic-bezier(.77, 0, 0.175, 1);
        

      }

  }

  @media screen and (max-width: 768px) {
    width: 90%;
    font-size: 1.8rem;
    line-height: 1.3;
    
  @media screen and (max-width: 540px) {
    width: 90%;
      font-size: 1.2rem;
      line-height: 1.3;
      
} 
`
