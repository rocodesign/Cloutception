import React from 'react'

const HistoryHeader = () => {
  return (
    <div className="row no-gutters fc-default fs-13px mt-10px">
      <div className="col-lg-3 d-flex align-items-center">User</div>
      <div className="col-lg-3 d-lg-flex align-items-center justify-content-end">
        <div className="d-flex align-items-center justify-content-end">
          Amount
        </div>
      </div>
      <div className="col-lg-3 mb-0 d-flex align-items-center justify-content-end text-right">
        <div>Price</div>
      </div>
      <div className="col-lg-3 mb-0 d-flex align-items-center justify-content-end text-right">
        <div>Locked</div>
      </div>
    </div>
  )
}

export default HistoryHeader
