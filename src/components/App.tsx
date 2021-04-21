import { StrictMode, useContext, useEffect, useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom'
import Root, { RootProvider } from '../context/root'
import { wait } from '../utils/util'
import {
  PortalWrapper,
  tabsAnchor,
  contentAnchor,
  statusAnchor
} from '../utils/react'
import Tabs from './tabs/Tabs'
import Content from './content/Content'
import { getBCPrice, getCreatorKey } from '../utils/page'
import {
  setBCPrice,
  setCreatorKey,
  setSelectedTab,
  setUserKey
} from '../state/actions'
import CreatorStatus from './status/CreatorStatus'
import {
  watchCurrentUser,
  watchUrl,
  watchWalletData,
  addSearchEvents
} from '../utils/watchdog'

type AnchorMap = {
  [key: string]: Promise<HTMLDivElement>
}

const App = () => {
  const [routeName, setRouteName] = useState('')
  const { state, dispatch } = useContext(Root)
  const [anchors, setAnchors] = useState<AnchorMap>({})

  async function handleUrlChange(pathname, _search) {
    setRouteName('')

    console.warn('url changed', pathname)

    await wait(50)
    dispatch(setSelectedTab(-1))

    addSearchEvents()
    if (!state.bitcloutPrice) {
      const price = await getBCPrice()
      dispatch(setBCPrice(price))
    }

    if (pathname.match(/\/u\/[a-z0-9-_]{1,}$/i)) {
      const key = await getCreatorKey()
      dispatch(setCreatorKey(key))

      setAnchors({
        tabs: tabsAnchor(),
        content: contentAnchor(),
        status: statusAnchor()
      })
      setRouteName('profile')
    }
  }

  async function handleWalletDataChange(price) {
    dispatch(setBCPrice(price))
  }

  useEffect(() => {
    watchUrl(handleUrlChange)
    watchWalletData(handleWalletDataChange)
    watchCurrentUser(() => {})
  }, [])

  return (
    <div>
      {routeName === 'profile' && (
        <PortalWrapper component={<Tabs />} anchorPromise={anchors.tabs} />
      )}
      {routeName === 'profile' && (
        <PortalWrapper
          component={<Content />}
          anchorPromise={anchors.content}
        />
      )}
      {routeName === 'profile' && (
        <PortalWrapper
          component={<CreatorStatus />}
          anchorPromise={anchors.status}
        />
      )}
    </div>
  )
}

const rootElement = document.createElement('div')
rootElement.className = 'cloutception-root'
document.body.appendChild(rootElement)
ReactDOM.render(
  <StrictMode>
    <RootProvider>
      <App />
    </RootProvider>
  </StrictMode>,
  rootElement
)

export default App
