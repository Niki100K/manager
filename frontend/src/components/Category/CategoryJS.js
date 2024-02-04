import { useContext } from 'react'
import { Store } from '../../Store'
const CategoryJS = () => {
    const {setStoreData} = useContext(Store)
    const handleManage = (category, name, volume, method, value) => {
        setStoreData(prev => {
            switch (method) {
                case 'add':
                    return {
                        ...prev,
                        [category]: {
                            ...prev[category],
                            [name]: {
                                ...prev[category]?.[name],
                                [volume]: (prev[category]?.[name]?.[volume] || 0) + value
                            }
                        }
                    }
                case 'remove':
                    if (prev[category]?.[name]?.[volume]) {
                        let correctName = {...prev[category][name]}
                        let answear = prev[category][name][volume] - value
                        if (answear > 0) {
                            return {
                                ...prev,
                                [category]: {
                                    ...prev[category],
                                    [name]: {
                                        ...prev[category][name],
                                        [volume]: answear
                                    }
                                }
                            }
                        } else {
                            delete correctName[volume]
                            if (Object.values(correctName).length === 0) {
                                let correctCategory = {...prev[category]}
                                delete correctCategory[name]
                                if (Object.values(correctCategory).length === 0) {
                                    let correctPrev = {...prev}
                                    delete correctPrev[category]
                                    return correctPrev
                                } else {
                                    return {
                                        ...prev,
                                        [category]: correctCategory
                                    }
                                }
                            } else {
                                return {
                                    ...prev,
                                    [category]: {
                                        ...prev[category],
                                        [name]: correctName
                                    }
                                }
                            }
                        }
                    } else {
                        return prev
                    }
                case 'clear':
                    if (prev[category]?.[name]?.[volume]) {
                        let correctName = {...prev[category][name]}
                        delete correctName[volume]
                        if (Object.values(correctName).length === 0) {
                            let correctCategory = {...prev[category]}
                            delete correctCategory[name]
                            if (Object.values(correctCategory).length === 0) {
                                let correctPrev = {...prev}
                                delete correctPrev[category]
                                return correctPrev
                            } else {
                                return {
                                    ...prev,
                                    [category]: correctCategory
                                }
                            }
                        } else {
                            return {
                                ...prev,
                                [category]: {
                                    ...prev[category],
                                    [name]: correctName
                                }
                            }
                        }
                    } else {
                        return prev
                    }
                default:
                    return prev
            }
        })
    }
  return {
    handleManage
  }
}

export default CategoryJS
