import { useEffect, useState } from 'react';
import Slider from "react-slick";
import "./Home.css";

const Home = () => {

    const [nav2, setNav2] = useState();

    useEffect(() => {
        setNav2();
    }, [nav2]);


  return (
    <div className="swiper" style={{ padding: "0 30px", }}>
      <Slider className="mainSlider" asNavFor={nav2}>
        <div className="swiper_item">
          <div className="swiper_text">
            <h1>Скидка -30%</h1>
            <p>with our products</p>
            <button className="swiper_btn">Batafsil 
                <img src="https://therepublicoftoys.uz/static/media/btnarrow.a886bf66.svg" alt="" />
            </button>
          </div>
          <div className="swiper_img">
            <img
              src="https://therepublicoftoys.uz/img/home/kamaz2.png"
              alt=""
            />
          </div>
        </div>
        <div className="swiper_item">
          <div className="swiper_text">
            <h1>Enjoy with </h1>
            <p>with our products</p>
            <button className="swiper_btn">Batafsil 
                <img src="https://therepublicoftoys.uz/static/media/btnarrow.a886bf66.svg" alt="" />
            </button>
          </div>
          <div className="swiper_img">
            <img
              src="https://therepublicoftoys.uz/img/home/kamaz3.png"
              alt=""
            />
          </div>
        </div>
        <div className="swiper_item">
          <div className="swiper_text">
            <h1>Safe and attractive</h1>
            <p>with our products</p>
            <button className="swiper_btn">Batafsil
                <img src="https://therepublicoftoys.uz/static/media/btnarrow.a886bf66.svg" alt="" />
            </button>
          </div>
          <div className="swiper_img">
            <img src="https://therepublicoftoys.uz/img/home/kamaz.png" alt="" />
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default Home