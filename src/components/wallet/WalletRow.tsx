import React from 'react'
import { formatBalance, formatPrice } from '../../utils/number'
import User from '../shared/User'

const WalletRow = ({
  image,
  username,
  balance,
  coinPrice,
  bcPrice,
  marketValue,
  sellValue
}) => {
  return (
    <div className="row no-gutters fc-default mt-10px">
      <div className="col d-flex align-items-center">
        <User username={username} image={image} />
      </div>
      <div className="col-lg-2 d-lg-flex align-items-center justify-content-end">
        <div className="d-flex align-items-center justify-content-end">
          {formatPrice(coinPrice / 1e9, bcPrice)}
        </div>
      </div>
      <div className="col-lg-2 mb-0 d-flex align-items-center justify-content-end text-right">
        <div>
          <div> {formatBalance(marketValue, bcPrice)} </div>
          <div className="text-grey8A fs-12px text-right">
            {formatBalance(marketValue, bcPrice, 'btclc')}
          </div>
        </div>
      </div>

      <div className="col-lg-2 mb-0 d-flex align-items-center justify-content-end text-right">
        <div>
          <div> {formatBalance(sellValue, bcPrice)} </div>
          <div className="text-grey8A fs-12px text-right">
            {formatBalance(sellValue, bcPrice, 'btclc')}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletRow
