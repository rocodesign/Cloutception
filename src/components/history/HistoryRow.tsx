import React from 'react'
import { formatBalance, formatPrice } from '../../utils/number'
import User from '../shared/User'

const HistoryRow = ({
  action,
  username,
  price,
  change,
  transactor,
  locked,
  bitclouts,
  bcPrice,
  userKey
}) => {
  change = change ?? Number.POSITIVE_INFINITY
  return (
    <div className="row no-gutters fc-default mt-10px">
      <div className="col-lg-3 d-flex align-items-center">
        {action === 'sell' && transactor === userKey && (
          <div className="fc-red pr-5px">
            <i className="fas fa-exclamation-triangle"></i>
          </div>
        )}
        <User username={username || transactor} />
      </div>
      <div className="col-lg-3 d-lg-flex align-items-center justify-content-end">
        <div
          className={`d-flex align-items-center justify-content-end ${
            action === 'buy' ? 'fc-green' : 'fc-red'
          }`}
        >
          {formatPrice(bitclouts, bcPrice)}
        </div>
      </div>
      <div className="col-lg-3 mb-0 d-flex align-items-center justify-content-end text-right">
        <div>
          <div>{formatBalance(price, bcPrice)} </div>
          {change && (
            <div
              className={`fs-12px text-right ${
                change > 0 ? 'fc-green' : 'fc-red'
              }`}
            >
              {change.toFixed(2)}%
            </div>
          )}
        </div>
      </div>

      <div className="col-lg-3 mb-0 d-flex align-items-center justify-content-end text-right">
        <div>
          <div> {formatBalance(locked, bcPrice)} </div>
          <div className="text-grey8A fs-12px text-right">
            {formatBalance(locked, bcPrice, 'btclc')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HistoryRow
