import React from 'react'
import styled from 'styled-components'
import {motion} from 'framer-motion'





function About() {
    return (
        <AboutContent>
       
        </AboutContent>
    )
}

export default About
const AboutContent = styled(motion.div)`
  display: block;
  justify-content: center;
  align-items: center;
  margin-top: 15rem;
  width: 100vw;
  height: 100vh;
  background: #171717;   


  @media screen and (max-width: 768px) {
    width: 80vw;
`

