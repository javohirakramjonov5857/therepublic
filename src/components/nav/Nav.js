import React from 'react'
import './Nav.css';
import logo from '../assets/Vector.svg';

import { FiVolume2 } from 'react-icons/fi';

const Nav = () => {

  const [volume, setVolume] = React.useState(50);


  return (
    <div className="nav">
      <div className="nav_wrapper">
        <div className='nav_logo'>
          <img src="https://therepublicoftoys.uz/img/nav/logo.svg" alt="" />
        </div>
        <ul className='nav_collection'>
          <li>
            <li className="active"></li>
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Showroom</a></li>
          <li><a href="#">Partner</a></li>
          <li><a href="#">Partner</a></li>
          
          <li>
            <div className="volume">
              <div className="upper">
                <FiVolume2 className='volume_icon'/>
                <input defaultValue={volume} min={0} max={100} onChange={(e)=> {
                    setVolume(e.target.value)
                    console.log(e);
                }} type="range" className='volume_input'/>
                {/* <p>{volume}</p>  */}
              </div>
            </div>
          </li>
          <li>
            <select className='langSelect'>
              <option value="uz">UZB</option>
              <option value="ru">RUS</option>
              <option value="eng">ENG</option>
            </select>
          </li>
          <li>
            <a href="#">
              <button className='nav_button'>
                <span> <img src={logo} alt="Logo" className="images" /> <p> 99 111 23 45</p></span>
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>

    
  )
}

export default Nav;