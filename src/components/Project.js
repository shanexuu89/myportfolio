import React, { useState }from 'react'
import styled from 'styled-components'
import BgImage from '../images/banner.gif'
import ImageOne from '../images/Project-1.png'
import ImageTwo from '../images/Project-2.png'
import ImageThree from '../images/Project-3.gif'
import ImageFour from '../images/Project-4.gif'


import { Parallax } from "react-scroll-parallax";


const images = [
    {
      src: ImageOne,
      title: "1. Folioage Fever",
      detail: "UI/UX Design React Frontend",
    },
    {
      src: ImageTwo,
      title: "2. Cab booking system",
      detail: "UI/UX Design Full Stack",
    },
    {
      src: ImageThree,
      title: "3. Jewellery Website Template",
      detail: "UI/UX Design",
    },
  
    {
      src: ImageFour,
      title: "4. Ecommerce Website Template",
      detail: "UI/UX Design",
    },
  ];

  function ProjectItem({
    src,
    title,
    detail,
    updateActiveImage,
    index,
    
  }) {

    return (
        <ProjectWrapper id="project">
        <ProjectsItem>
           <ProjectTitle>{title}</ProjectTitle>
            <ProjectDetail>{detail}</ProjectDetail>
          <ProjectImg style={{ backgroundImage: `url(${src})`}}></ProjectImg>
        </ProjectsItem>
        </ProjectWrapper>
        
    );
  }

function Project() {
    const [activeImage, setActiveImage] = useState(1);

    return (
        <ProjectContainer>

          {images.map((image, index) => (
              <ProjectItem 
                key={image.src}
                index={index}
                {...image}
                updateActiveImage={(index) => setActiveImage(index + 1)}
              />
          )
          )}
        </ProjectContainer>
    )
}

export default Project

const ProjectContainer = styled.div`
    background: url(${BgImage});
    background-repeat: repeat;
    justify-content: center;
    align-items: center;
`


const ProjectWrapper = styled.div`
   width: 100vw;
   height: 150vh
   justify-content: center;
   align-items: center;
   display: flex;

`
const ProjectsItem = styled.div`
    will-change: transform;
    position: flex;
    width: 100vw;
    height: 40vh;
    @media screen and (max-width: 768px) {
      height: 70vh;
    }

    

`


const ProjectImg = styled.div`

    visibility: hidden;
    position: absolute;
    background-size: cover;
    background-position: center;
    transform-origin: center;
    width: 28vw;
    height: 33vh;
    left: 48%;
    z-index: 1;
    bottom: 25%;
    transition: transform .2s ease-in-out;
    
  
    @media screen and (max-width: 1024px) {
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 50vh;
      left: auto;
  
    }

    
`
const ProjectTitle = styled.h2`

    font-weight: 800;
    -webkit-text-fill-color: #171717; 
    -webkit-text-stroke: 1px #9B988B;
    position: absolute;
    text-transform: uppercase;
    left:18%;
    font-size: 4.6rem;
    -webkit-font-smoothing: antialiased;
    z-index: 2;
    color: transparent;
    will-change: transform;
    color: #9B988B;
    width: 45vw;
    opacity: 0.8;
    
    &:hover ~ ${ProjectImg} {
      visibility: visible;
      transform: rotate(5deg);
      
  }
  &:hover {
    cursor: pointer;
        -webkit-text-fill-color: #9B988B;
        opacity: 1;
        transition: opacity .35s cubic-bezier(.77, 0, 0.175, 1);
        -webkit-text-stroke: 0px;

  }
    @media screen and (max-width: 768px) {
      position: flex;
      font-size: 2rem;

    }


`
const ProjectDetail = styled.div`
    position: absolute;
    color: #9B988B;
    font-weight: 400;
    font-size: 1rem;
    left: 75%;
    bottom: 48%;
    width: 10vw;
    -webkit-font-smoothing: antialiased;
    z-index: 33;
    will-change: transform;
    word-wrap: break-word;
    

`