import React, { useEffect, useState } from 'react'
import { getWallet } from '../../services/api'
import { useSelector } from '../../context/root'
import { selectors } from '../../state'
import Loading from '../Loading'
import WalletHeader from './WalletHeader'
import WalletRow from './WalletRow'

const Wallet = () => {
  const key = useSelector(selectors.creatorKey)
  const price = useSelector(selectors.price)

  const [wallet, setWallet] = useState(null)

  useEffect(() => {
    getWallet(key).then((data) => {
      setWallet(data)
    })
  }, [])

  if (!wallet) return <Loading />

  const ccbalance = wallet.users.reduce((sum, u) => sum + u.sellValue, 0)

  return (
    <div className="d-flex flex-column">
      <div className="fc-black">
        {`Balance: ${(wallet.balance / 1e9).toFixed(4)} BCLT`}
        <span className="text-muted">
          {` ≈ $${((wallet.balance / 1e9) * price).toFixed(2)}`}
        </span>
      </div>
      <div className="fc-black">
        {`Locked in creator coin : ${ccbalance.toFixed(4)} BCLT`}
        <span className="text-muted">
          {` ≈ $${(ccbalance * price).toFixed(2)}`}
        </span>
      </div>
      <WalletHeader />
      {wallet.users.map((u) => (
        <WalletRow {...u} key={u.key} bcPrice={price} />
      ))}
    </div>
  )
}

export default Wallet
