import React, { createContext, useEffect, useState } from 'react'

export const Store = createContext()
export const StoreProvider = ({ children }) => {
    const [storeData, setStoreData] = useState({});
    return (
        <Store.Provider value={{ storeData, setStoreData }}>
            { children }
        </Store.Provider>
    )
}