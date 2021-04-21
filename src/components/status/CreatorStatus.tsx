import React, { useEffect, useState } from 'react'
import { getUserStatus } from '../../services/api'
import { useSelector } from '../../context/root'
import { selectors } from '../../state'

const CreatorStatus = () => {
  const key = useSelector(selectors.creatorKey)

  const [data, setData] = useState(null)

  useEffect(() => {
    getUserStatus(key).then((data) => {
      setData(data)
    })
  }, [key])

  const rugPercent = data?.rugPercent || 0
  const rugHex = Math.ceil((rugPercent / 100) * 255)
  const red = rugHex.toString(16).padStart(2, '0')
  const green = (255 - rugHex).toString(16).padStart(2, '0')
  const color = `#${red}${green}00`

  return (
    <div className="d-flex flex-column flex-grow-1 justify-content-end align-items-end text-right fs-12px">
      {data ? (
        <div>
          <div style={{ color }}>
            {rugPercent < 15 && <i className="fas fa-thumbs-up"></i>}
            {rugPercent > 50 && <i className="fas fa-thumbs-down"></i>}
            <span className="pl-5px">RUGGER: {rugPercent}%</span>
          </div>
          <div className="fc-green">Bought: {data.buy.toFixed(4)} BCLT</div>
          <div className="fc-red">Sold: {data.sell.toFixed(4)} BCLT</div>
        </div>
      ) : (
        <div className="fc-muted">Checking user status</div>
      )}
    </div>
  )
}

export default CreatorStatus
