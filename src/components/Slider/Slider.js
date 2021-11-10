import React, { useRef, useState, useEffect } from 'react';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

import './Slider.scss'; 

import slideImg1 from '../../assets/img/slider/1.jpg';
import slideImg2 from '../../assets/img/slider/2.jpg';
import slideImg3 from '../../assets/img/slider/3.jpg';
import slideImg4 from '../../assets/img/slider/4.jpg';
import slideImg5 from '../../assets/img/slider/5.jpg';
import slideImg6 from '../../assets/img/slider/6.jpg';
import slideImg7 from '../../assets/img/slider/7.jpg';
import slideImg8 from '../../assets/img/slider/8.jpg';

const slideImages = [
    slideImg1, slideImg2, slideImg3, slideImg4, slideImg5, slideImg6, slideImg7, slideImg8
];

export const Slider = () => {
    const slideRef = useRef();
    const [slideCount, setSlideCount] = useState(5);

    const properties = {
        duration: 3000,
        transitionDuration: 500,
        infinite: true,
        slidesToScroll: 1,
        arrows: false,
        indicators: i => (<div className="indicator"></div>)
    };

    const initialSlideCount = () => {
        if( window.innerWidth > 768 )
            setSlideCount(5);
        else
            setSlideCount(3);
    }

    useEffect(() => {
        initialSlideCount();
        setInterval(() => {
            initialSlideCount();
        }, 100);
    }, [])

    return (
        <section className="slider">
            <Slide easing="ease" {...properties}  slidesToShow={slideCount} ref={ slideRef }>
                {slideImages.map((each, index) => (
                    <div key={index} className="slider__eachItem">
                        <div style={{ backgroundImage: `url(${each})` }}>
                        </div>
                    </div>
                ))}
            </Slide>
        </section>
    )
}

export default Slider;