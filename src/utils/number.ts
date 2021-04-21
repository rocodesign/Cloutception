const usdFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  // @ts-ignore
  notation: 'compact',
  maximumSignificantDigits: 2
})

export function formatPrice(price, bcPrice) {
  return usdFormatter.format(bcPrice * price)
}

export function formatBalance(balance, bcPrice, currency = 'usd') {
  if (currency === 'usd') {
    return usdFormatter.format(bcPrice * balance)
  } else {
    return (
      balance &&
      balance.toLocaleString('en-US', {
        maximumFractionDigits: 4,
        minimumFractionDigits: 0
      })
    )
  }
}
