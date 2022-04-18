import React from 'react';
import Slider from "react-slick";
import './Product.css';

const Product = () => {
  return (
    <><div className='product'>
      <div className="title">
        <span>категория</span>
        <h1>Продукты</h1>
        <button className="btn"></button>
      </div>
    </div>

    {/* //// */}
    <div className='productBody'>
      <div className="productBody_wrapper">
        <Slider className="boshiniki"
          // asNavFor={nav1}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/ayiqcha.png" alt="" />
            <h5>Игрушка для уморазвития</h5>
          </div>
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/kamazcard.png" alt="" />
            <h5>Игрушка для девчонок</h5>
          </div>
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/shtuk.png" alt="" />
            <h5>Конструкторы</h5>
          </div>
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/kazan.png" alt="" />
            <h5>Машинки и моделиr</h5>
          </div>
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/skill.png" alt="" />
            <h5>Игрушка для уморазвития</h5>
          </div>
          <div className='product_item'>
            <img src="https://therepublicoftoys.uz/img/home/umer.png" alt="" />
            <h5>Конструкторы</h5>
          </div>
        </Slider>
      </div>
    </div>
    </>
  )
}

export default Product

