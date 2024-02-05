import React, { createContext, useState, useEffect } from 'react';

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [storeData, setStoreData] = useState(() => {
    // Зареждане на storeData от localStorage при първоначално рендериране
    const storedData = localStorage.getItem('storeData');
    return storedData ? JSON.parse(storedData) : {};
  });

  useEffect(() => {
    // Запазване на storeData в localStorage при промяна
    localStorage.setItem('storeData', JSON.stringify(storeData));
  }, [storeData]);

  return (
    <Store.Provider value={{ storeData, setStoreData }}>
      {children}
    </Store.Provider>
  );
};
