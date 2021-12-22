import React, {useState, useEffect} from "react";
import PropTypes from "prop-types";
import NextArrow from '../assets/icon/next-arrow.svg';
import PrevArrow from '../assets/icon/prev-arrow.svg';

import './carousel.css';

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

            }, 2000);
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

    const ButtonNext = () =>{
        if(!props.arrows){
            return <button onClick={()=>{
                updateIndex(activeIndex +1);
            }}>Next</button>
        } else {
            return <button className="arrow arrow-next" onClick={()=>{
                updateIndex(activeIndex +1);
            }}><img src={NextArrow} alt={"next slide icon"}/></button>
        }
    }


    const ButtonPrev = () =>{
        if(!props.arrows){
           return  <button onClick={()=>{
               updateIndex(activeIndex -1);
           }}>Prev</button>
        } else {
            return <button className="arrow arrow-prev" onClick={()=>{
                updateIndex(activeIndex -1);
            }}><img src={PrevArrow} alt={"previous slide icon"}/></button>
        }
    }

    return(
        <div className="carousel"
             id={props.id}
             onMouseEnter={() => setPaused(true)}
             onMouseLeave={() => setPaused(false)}
            >
            <div className="inner" style={{transform: `translateX(${activeIndex * 100}%)`}} >
                {React.Children.map(props.children, (child, index) => {
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
            <div className="indicators">
                <ButtonPrev />
                <div className="bullets-wrap">
                    {React.Children.map(props.children, (child, index) => {
                        let bulletLabel = (props.bullets)? "" : index+1;
                        return (
                          <button
                              className={`${index === activeIndex ? "active" : ""} ${props.bullets ? " bullet " : ""}`}
                              onClick={()=>{
                              updateIndex(index);
                          }}> {bulletLabel} </button>
                        );
                    })}
                </div>
                <ButtonNext />

            </div>
        </div>
    );
};

export default function Carousel({carousel: { id, type, bullets,arrows }}) {
    return (
        <CarouselWrap id={id} type={type} bullets={bullets} arrows={arrows}>
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
        type: PropTypes.oneOf(['default', 'infinite','bullets','arrows']),
        /**
         * add rounded bullets - true/false
         */
        bullets: PropTypes.bool,
    }),

};

Carousel.defaultProps = {
    id: 'a1',
    type: 'default',
};





