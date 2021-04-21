export async function waitFor(selector): Promise<HTMLDivElement> {
  return new Promise((resolve) => {
    const elem = document.querySelector(selector)
    if (elem) {
      return resolve(elem)
    }

    const observer = new MutationObserver(function () {
      const elem = document.querySelector(selector)
      if (elem) {
        observer.disconnect()
        return resolve(elem)
      }
    })

    observer.observe(document.body, { subtree: true, childList: true })
  })
}

export async function getCreatorKey() {
  const keyElem = await waitFor('.creator-profile__ellipsis-restriction')
  return keyElem.innerText.trim()
}

export async function getBCPrice() {
  const creatorBalance = await waitFor('.right-bar-creators__balance-box')
  const priceText =
    creatorBalance.firstElementChild.lastElementChild.firstChild.textContent

  return parseFloat(priceText.trim().substring(2))
}

export async function getTabSelector() {
  return await waitFor('.global__center__inner tab-selector')
}

export async function getTopBar() {
  return await waitFor('.creator-profile__top-bar')
}
