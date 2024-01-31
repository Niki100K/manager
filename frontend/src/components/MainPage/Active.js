import { useEffect, useRef, useState } from "react"

const Active = () => {
    const renderLimit = useRef(true)
    const [data, setData] = useState([])
    useEffect(() => {
        if (renderLimit.current) {
            setData([{},{},{},{},{},{},{},{},{},{},{}])
            renderLimit.current = false
        }
    }, [renderLimit, data])
  return {
    data
  }
}

export default Active
