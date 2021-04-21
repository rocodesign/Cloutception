export const coinPrice = function (supply) {
  return 0.003 * Math.pow(supply, 2)
}

export const coinPriceFromLocked = function (locked) {
  const supply = supplyFromLocked(locked)
  return 0.003 * supply * supply
}

export const coinSupply = function (price) {
  return 10 * Math.sqrt(10 / 3) * Math.sqrt(price)
}

export const locked = function (supply) {
  return 0.001 * supply ** 3
}

export const supplyFromLocked = function (locked) {
  return Math.pow(locked * 1000, 1 / 3)
}

export const isKey = (key) => {
  if (Array.isArray(key)) {
    key = key[0]
  }
  return key.match(/BC1Y([a-z 0-9]{50})/gi)
}

export const sellValue = function (price, sold) {
  const s = coinSupply(price)
  const l0 = locked(s)
  const l1 = locked(s - sold)
  return l0 - l1
}
