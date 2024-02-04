import React from 'react'
import { Link } from 'react-router-dom'
import './Main.css'
import { IoArrowRedo } from "react-icons/io5";
import Format from './JSON.json'
const Main = () => {
  return (
    <div className='Main c flex-c'>
      <div className='nav c'>
        <h2>Niki100</h2>
        <p>Active Orders <IoArrowRedo /></p>
      </div>
      <div className='categories c'>
        {Format.Categories.map((info, index) => (
          <Link to={info.name} className='category c r flex-c' key={index}>
            <div className='img c r'>
              <img src={require(`../../../../assets/categories/${info.img}.png`)} alt="" />
            </div>
            <div className='text c r'>
              <h2>{info.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Main
