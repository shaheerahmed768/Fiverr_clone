import React from 'react'
import "./Slide.scss"
import Slider from 'infinite-react-carousel'

export default function Slide({children, slidesToShow, arrowScroll}) {
  return (
    <div className="slide">
        <div className="container">
            <Slider dots slidesToShow={slidesToShow} arrowScroll={arrowScroll}>
                {children}
            </Slider>
        </div>
    </div>
  )
}
