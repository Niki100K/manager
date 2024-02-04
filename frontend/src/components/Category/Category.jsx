import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import './Category.css'
import 'swiper/css'
import 'swiper/css/navigation'

import JSON from './JSON.json'
import CategoryJS from './CategoryJS'
import { Store } from '../../Store'
const Category = () => {
  const {category} = useParams()
  const {handleManage} = CategoryJS()
  const {storeData} = useContext(Store)
  return (
    <div className='Category c'>
      <div className='con c'>
        {JSON[category].map((item, index) => (
          <div className='item c r' key={index}>
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              slidesPerGroup={1}
              navigation={item.Item.length > 0 ? true : false}
              modules={[Navigation]}
              className='mySwiper'
            >
              {item.Item.map((info, indexInfo) => (
                <SwiperSlide key={indexInfo}>
                  <div className='type c r flex-c'>
                    <div className='text c'>
                      <strong>{info.name}</strong>
                    </div>
                    <div className='img c'>
                      <img src={require(`../../assets/products/${info.img}`)} alt="" />
                      <div className='description c'>
                        <p>{info.volume}</p>
                        <span>{info.price}$</span>
                      </div>
                      {storeData[category]?.[info.name]?.[info.volume] > 0 && (
                        <strong className='c r'>{storeData[category]?.[info.name]?.[info.volume]}</strong>
                      )}
                    </div>
                    <div className='manage c flex-c'>
                      <div className='btn c'>
                        <button onClick={() => handleManage(category, info.name, info.volume, 'add', 1)} className='active'>+1</button>
                        <button onClick={() => handleManage(category, info.name, info.volume, 'add', 5)} className='active'>+5</button>
                        <button onClick={() => handleManage(category, info.name, info.volume, 'add', 10)} className='active'>+10</button>
                      </div>
                      <div className='btn c'>
                        <button onClick={() => handleManage(category, info.name, info.volume, 'remove', 1)} className={`${storeData[category]?.[info.name]?.[info.volume] > 0 && 'active'}`}>-1</button>
                        <button onClick={() => handleManage(category, info.name, info.volume, 'remove', 5)} className={`${storeData[category]?.[info.name]?.[info.volume] > 0 && 'active'}`}>-5</button>
                      </div>
                      <div className='btn c'>
                        <button onClick={() => handleManage(category, info.name, info.volume, 'clear')} className={`${storeData[category]?.[info.name]?.[info.volume] > 0 && 'active'}`}>Clear</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
