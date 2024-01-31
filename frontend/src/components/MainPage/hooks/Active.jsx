import React, { useCallback, useEffect, useRef, useState } from 'react'
import './Active.css'
import ActiveJS from '../Active'
const Active = () => {
  const cardsRef = useRef()
  const [cardWidth, setCardWidth] = useState(0)
  const {data} = ActiveJS()
  const handleWidth = useCallback(() => {
    let width = cardsRef.current.clientWidth
    if (window.innerWidth > 640) {
      setCardWidth(width / 5.4)
    }
    if (window.innerWidth <= 640) {
      setCardWidth(width / 4.4)
    }
    if (window.innerWidth <= 440) {
      setCardWidth(width / 3.1)
    }
    if (window.innerWidth <= 340) {
      setCardWidth(width / 2.1)
    }
  }, [])
  useEffect(() => {
    handleWidth()
    window.addEventListener('resize', handleWidth)
    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  }, [handleWidth])
  return (
    <div className='Active c'>
      <div className='con c flex-c'>
        <header className='c r'>
          <h2>Nikolai</h2>
          <p>Active Orders</p>
        </header>
        <div className='cards c' ref={cardsRef}>
          {data.map((info, index) => (
            <div className='card c r' style={{ width: cardWidth, height: cardWidth}} key={index}></div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Active
