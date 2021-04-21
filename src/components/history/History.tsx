import React, { useEffect, useState } from 'react'
import { getHistory } from '../../services/api'
import { useSelector } from '../../context/root'
import { selectors } from '../../state'
import Loading from '../Loading'
import HistoryRow from './HistoryRow'
import HistoryHeader from './HistoryHeader'

const History = () => {
  const key = useSelector(selectors.creatorKey)
  const price = useSelector(selectors.price)

  const [data, setData] = useState(null)

  useEffect(() => {
    getHistory(key).then((data) => {
      setData(data)
    })
  }, [])

  if (!data) return <Loading />

  return (
    <div className="d-flex flex-column">
      <HistoryHeader />
      {data.map((u, i) => (
        <HistoryRow {...u} key={'history_' + i} bcPrice={price} userKey={key} />
      ))}
    </div>
  )
}

export default History
