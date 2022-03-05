import React from 'react'
import styled from 'styled-components'

export const CustomCursor = () => {

    const mainCursor = React.useRef(null);
    const secondaryCursor = React.useRef(null);

    const positionRef = React.useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1,
      });


    React.useEffect(()=> {
        document.addEventListener("mousemove", (event)=>{
        const { clientX, clientY } = event;
        const mouseX = clientX;
        const mouseY = clientY;

      positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
      positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;
      mainCursor.current.style.transform = `translate3d(${mouseX - mainCursor.current.clientWidth / 2}px, ${mouseY - mainCursor.current.clientHeight / 2}px, 0)`;
        });
    },[]);  

    return (
        
        <AppCursor ref={mainCursor}></AppCursor>
    )
};


const AppCursor = styled.div`
   z-index: 1000;
   border-radius: 50%;
   width: 50px;
   height: 50px;
   border: 1px solid #000;
   pointer-events: none;
   overflow: hidden;
   transform: translate3d(0, 0, 0);
   position: fixed;



`