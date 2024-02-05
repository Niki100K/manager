import React, { useContext, useState } from 'react'
import './List.css'
import { FaTrashAlt, FaPen } from "react-icons/fa";
import {Store} from '../../Store'
import CategoryJS from '../Category/CategoryJS';
const List = () => {
  const {handleManage} = CategoryJS()
  const {storeData, setStoreData} = useContext(Store)
  const [show, setShow] = useState(false)
  const [showSettings, setShowSettings] = useState([])
  let totalVolume = 0;
  Object.keys(storeData).forEach((categoryName) => {
    Object.keys(storeData[categoryName]).forEach((itemName) => {
      Object.keys(storeData[categoryName][itemName]).forEach((volume) => {
        totalVolume += storeData[categoryName][itemName][volume];
      });
    });
  });
  const handleSettings = (keys, item, volume) => {
    if (showSettings[0] === keys && showSettings[1] === item && showSettings[2] === volume) {
      setShowSettings([])
    } else {
      setShowSettings([keys, item, volume])
    }
  }
  
  const background = () => {
    return (
      <div onClick={() => setShow(!show)} className={`background ${totalVolume && 'show'} c`}>

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
                    <div className='item c flex-c' key={indexItem}>
                      <div className='text c'>
                        <h4>{item}</h4>
                      </div>
                      {Object.keys(storeData[keys][item]).map((volume, indexVolume) => (
                        <div className='volume c flex-c' key={indexVolume}>
                          <div className='info c'>
                            <p>{volume}</p>
                            <div className='values c'>
                              <span>{storeData[keys][item][volume]}</span>
                              <div className='pen c r'>
                                <FaPen onClick={() => handleSettings(keys, item, volume)} id='pen'/>
                              </div>
                            </div>
                          </div>
                          {(showSettings[0] === keys && showSettings[1] === item && showSettings[2] === volume) && (
                            <div className='btns c'>
                              <button onClick={() => handleManage(keys, item, volume, 'add', 1)}>+1</button>
                              <button onClick={() => handleManage(keys, item, volume, 'remove', 1)}>-1</button>
                              <button onClick={() => handleManage(keys, item, volume, 'clear', )}>Delete</button>
                              <button onClick={() => handleSettings(keys, item, volume)}>Close</button>
                            </div>
                          )}
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
