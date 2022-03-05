import React from "react"
import styled from "styled-components";

export default ({ title }) => (
    <AboutItem>
            <span>{title}</span>
    </AboutItem>

);


const AboutItem = styled.div`
   display: inline-block;
   font-size: 4rem;
   font-weight: 600;
   color: #9B988B;
   mix-blend-mode: difference;

   &:hover {
        opacity: 1;
}
&:last-of-type {
    span:after {
        content: "";
    }

}
   span {
    font-style: italic;
    -webkit-text-stroke: none;
    transition: opacity .35s cubic-bezier(.77, 0, 0.175, 1);


    &:hover {
      font-style: normal;
      cursor: pointer;
      text-decoration: none;
      opacity: 0.5;
    }
    &:after {
        content: ", ";
    }
  }

`
