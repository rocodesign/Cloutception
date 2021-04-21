import { getProfile } from '../services/api'
import dispatcher from '../services/dispatcher'
import { isKey } from './ccutil'
import { getBCPrice, waitFor } from './page'

import { NAVIGATION_EVENT } from '../constants'

async function searchHandler(e) {
  const value = e.target.value
  if (!isKey(value)) return
  e.stopPropagation()
  e.stopImmediatePropagation()
  e.preventDefault()
  let profile = await getProfile(value)
  let username = profile?.ProfilesFound[0].Username
  if (!username) return
  e.target.value = username
  let event = document.createEvent('Event')
  event.initEvent('input', true, true)
  e.target.dispatchEvent(event)
}

let s
export async function addSearchEvents() {
  if (s) {
    s.removeEventListener('input', searchHandler, true)
  }
  s = await waitFor('#searchBarRoot .input-group input')
  if (s) {
    s.addEventListener('input', searchHandler, true)
  }
}

export function watchUrl(callback) {
  let lastUrl = ''

  dispatcher.addEventListener(NAVIGATION_EVENT, (e: CustomEvent) => {
    onUrlChange(e.detail)
  })

  function onUrlChange(url) {
    const urlObject = new URL(url)
    const pathname = urlObject.pathname
    if (pathname !== lastUrl) {
      lastUrl = pathname
      callback(pathname, urlObject.search)
    }
  }

  onUrlChange(location.href)
}

export async function watchWalletData(callback) {
  const creatorBalance = await waitFor('.right-bar-creators__balance-box')

  const bcPrice = await getBCPrice()
  callback(bcPrice)
  const observer = new MutationObserver(async function () {
    callback(await getBCPrice())
  })

  observer.observe(creatorBalance, {
    subtree: true,
    childList: true,
    characterData: true
  })
}

export async function watchCurrentUser(callback) {
  const userSelector = await waitFor(
    '.change-account-selector__ellipsis-restriction'
  )
  callback(JSON.parse(localStorage.getItem('lastLoggedInUser')))
  const observer = new MutationObserver(async function () {
    callback(JSON.parse(localStorage.getItem('lastLoggedInUser')))
  })

  observer.observe(userSelector, {
    subtree: true,
    childList: true,
    characterData: true
  })
}
