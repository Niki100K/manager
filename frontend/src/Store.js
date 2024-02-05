import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()
export const StoreProvider = ({ children }) => {
    const [storeData, setStoreData] = useState({});
    useEffect(() => {
        console.log(storeData);
    }, [storeData])
    return (
        <Store.Provider value={{ storeData, setStoreData }}>
            { children }
        </Store.Provider>
    )
}