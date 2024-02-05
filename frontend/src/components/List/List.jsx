import React, { useContext, useState } from 'react'
import './List.css'
import { FaTrashAlt } from "react-icons/fa";
import {Store} from '../../Store'
const List = () => {
  const {storeData, setStoreData} = useContext(Store)
  const [show, setShow] = useState(false)
  let totalVolume = 0;
  Object.keys(storeData).forEach((categoryName) => {
    Object.keys(storeData[categoryName]).forEach((itemName) => {
      Object.keys(storeData[categoryName][itemName]).forEach((volume) => {
        totalVolume += storeData[categoryName][itemName][volume];
      });
    });
  });
  
  const background = () => {
    return (
      <div onClick={() => setShow(!show)} className='background c'>

      </div>
    )
  }

  const total = () => {
    return (
      <div className='total c flex-c'>
        <div onClick={() => setShow(!show)} className={`circle ${totalVolume && 'show'} c r`}>
          <h1>{totalVolume}</h1>
        </div>
        {show &&
          <div className={`box ${totalVolume && 'show'} c r flex-c`}>
            <div className='header c'>
              <div className='manage c'>
                <FaTrashAlt onClick={() => setStoreData({})} id='trash'/>
                <p>Delete</p>
              </div>
            </div>
            <div className='con c r'>
              {Object.keys(storeData).map((keys, index) => (
                <div className='category c r flex-c' key={index}>
                  <div className='name c r'>
                    <h2>{keys}</h2>
                  </div>
                  {Object.keys(storeData[keys]).map((item, indexItem) => (
                    <div className='item c r flex-c' key={indexItem}>
                      <div className='text c'>
                        <h4>{item}</h4>
                        <FaTrashAlt id='trash'/>
                      </div>
                      {Object.keys(storeData[keys][item]).map((volume, indexVolume) => (
                        <div className='volume c flex-c' key={indexVolume}>
                          <div className='info c'>
                            <p>{volume}</p>
                            <span>{storeData[keys][item][volume]}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
              <div className='btn c'>
                <button>Finish Order</button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
  return (
    <div className='List c'>
      {show && background()}
      {total()}
    </div>
  )
}

export default List
