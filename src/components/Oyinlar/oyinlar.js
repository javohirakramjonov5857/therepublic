import React from "react";
import Slider from "react-slick";
import W from '../assets/w.svg';
import Baby from '../assets/baby.svg';
import Qol from '../assets/qol.svg';

import './oyinlar.css';



export default function Oyinlar(){
    return(
        <div className='productBody'>
        <div className="productBody_wrapper">
          <Slider className="boshiniki"
            slidesToShow={5}
            swipeToSlide={true}
            focusOnSelect={true}
          >
            <div className='product_item1'>
            <img src={Qol} alt="Logo" className="images" />
              <h5>Игрушка для уморазвития</h5>
            </div>
            <div className='product_item1'>
            <img src={W} alt="Logo" className="images" />
              <h5>Игрушка для девчонок</h5>
            </div>
            <div className='product_item1'>
            <img src={Baby} alt="Logo" className="images" />
              <h5>Конструкторы</h5>
            </div>
            <div className='product_item1'>
            <img src={Qol} alt="Logo" className="images" />
              <h5>Машинки и моделиr</h5>
            </div>
            <div className='product_item1'>
            <img src={W} alt="Logo" className="images" />
              <h5>Игрушка для уморазвития</h5>
            </div>
            <div className='product_item1'>
            <img src={Baby} alt="Logo" className="images" />
              <h5>Конструкторы</h5>
            </div>
          </Slider>
        </div>
      </div>
    )
}