import React, { useContext, useState } from 'react';
import './List.css';

import { Store } from '../../Store';
import CategoryJS from '../Category/CategoryJS'
const List = () => {
  const {handleManage} = CategoryJS()
  const { storeData } = useContext(Store);
  const [show, setShow] = useState(false);

  let totalVolume = 0;
  Object.keys(storeData).forEach((categoryName) => {
    Object.keys(storeData[categoryName]).forEach((itemName) => {
      Object.keys(storeData[categoryName][itemName]).forEach((volume) => {
        totalVolume += storeData[categoryName][itemName][volume];
      });
    });
  });

  return (
    <div className={`List ${totalVolume > 0 && 'show'} c flex-c`}>
      <div onClick={() => setShow(!show)} className='circle c'>
        <p>{totalVolume}</p>
      </div>
      <div className={`box ${show && 'show'} c r`}>
        <div className='hidden c r'>
          {Object.keys(storeData).map((categoryName, indexCategory) => (
            <div className='item c r flex-c' key={indexCategory}>
              <div className='header c'>
                <p>{categoryName}</p>
              </div>
              {Object.keys(storeData[categoryName]).map((itemName, indexItem) => (
                <div className='earch c flex-c' key={indexItem}>
                  <h3>{itemName}</h3>
                  {Object.keys(storeData[categoryName][itemName]).map((volume, indexVolume) => (
                    <div className='type c flex-c' key={indexVolume}>
                      <div className='info c'>
                        <p>{volume}</p>
                        <span>{storeData[categoryName][itemName][volume]}</span>
                      </div>
                      <div className='btn c'>
                        <div className='double c'>
                          <button onClick={() => handleManage(categoryName, itemName, volume, 'add', 1)}>+1</button>
                          <button onClick={() => handleManage(categoryName, itemName, volume, 'remove', 1)}>-1</button>
                        </div>
                        <button onClick={() => handleManage(categoryName, itemName, volume, 'clear')}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default List;
