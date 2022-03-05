import { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll'


export default function useLocoScroll(start){
    useEffect(() => {
        if (!start) return;

        let locoScroll = null;
        const scrollEl = document.querySelector("data-scroll-container");


        locoScroll =  new LocomotiveScroll({
            el: scrollEl,
            smooth: true,
            multiplier: .3,

        });

        


    }, [start])
}
