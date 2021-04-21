import React from 'react'

const WalletHeader = () => {
  return (
    <div className="row no-gutters fc-default fs-13px mt-10px">
      <div className="col d-flex align-items-center">User</div>
      <div className="col-lg-2 d-lg-flex align-items-center justify-content-end">
        <div className="d-flex align-items-center justify-content-end text-right">
          Coin
          <br /> Price
        </div>
      </div>
      <div className="col-lg-2 mb-0 d-flex align-items-center justify-content-end text-right">
        <div>
          Market
          <br />
          Value
        </div>
      </div>
      <div className="col-lg-2 mb-0 d-flex align-items-center justify-content-end text-right">
        <div>Cash-Out Value</div>
      </div>
    </div>
  )
}

export default WalletHeader
