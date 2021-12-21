import React, {useState, useEffect} from "react";
//import PropTypes from "prop-types";

import './carousel.css';
import PropTypes from "prop-types";
import {Button} from "../stories/Button";

export const CarouselItem = ({children, width}) => {
    return(
      <div className="carousel-item" style={{width: width}}>
          {children}
      </div>
    );
};

export const CarouselWrap = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    useEffect(() =>{
        if(props.type==="infinite"){
            const interval = setInterval(()=>{
                if(!paused){
                    updateIndex(activeIndex + 1);
                }

            }, 1000);
            return () => {
                if(interval){
                    clearInterval(interval);
                }
            }
        }
    });

    const updateIndex = (newIndex) =>{

        if(props.type==="default"){
            if(newIndex < 0){
                newIndex = 0;
            } else if( newIndex >= React.Children.count(props.children)){
                newIndex = React.Children.count(props.children) - 1;
            }
            setActiveIndex(newIndex);
        } else if(props.type==="infinite"){
            if(newIndex < 0){
                newIndex = React.Children.count(props.children) - 1;
            } else if( newIndex >= React.Children.count(props.children)){
                newIndex = 0;
            }
            setActiveIndex(newIndex);
        }

    };

    return(
        <div className="carousel"
             id={props.id}
             onMouseEnter={() => setPaused(true)}
             onMouseLeave={() => setPaused(false)}
            >
            <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}} >
                {React.Children.map(props.children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
            <div className="indicators">
                <button onClick={()=>{
                    updateIndex(activeIndex -1);
                }}>Prev</button>
                {React.Children.map(props.children, (child, index) => {
                    return (
                      <button
                          className={`${index === activeIndex ? "active" : ""}`}
                          onClick={()=>{
                          updateIndex(index);
                      }}> {index+1} </button>
                    );
                })}
                <button onClick={()=>{
                    updateIndex(activeIndex +1);
                }}>Next</button>
            </div>
        </div>
    );
};

export default function Carousel({carousel: { id, type }}) {
    return (
        <CarouselWrap id={id} type={type}>
            <CarouselItem>Item 1</CarouselItem>
            <CarouselItem>Item 2</CarouselItem>
            <CarouselItem>Item 3</CarouselItem>
            <CarouselItem>Item 4</CarouselItem>
        </CarouselWrap>
    );
}

Carousel.propTypes = {
    /** Composition of the task */
    carousel: PropTypes.shape({
        /** Id of the carousel */
        id: PropTypes.string.isRequired,
        /**
         * what type of carousel
         */
        type: PropTypes.oneOf(['default', 'infinite']),
    }),

};

Carousel.defaultProps = {
    id: 'a1',
    type: 'default',
};





