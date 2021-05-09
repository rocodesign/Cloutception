import React, { useContext, useState } from 'react'
import Root from '../../context/root'
import { setSelectedTab } from '../../state/actions'
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'
import History from '../history/History'
import Wallet from '../wallet/Wallet'

const contentMap = [Wallet, History]

const Content = () => {
  const { state, dispatch } = useContext(Root)

  const closeContent = () => {
    dispatch(setSelectedTab(-1))
  }

  if (state.selectedTab === -1) return null

  const Component = contentMap[state.selectedTab]

  if (!Component) return null

  return (
    <div
      className="cloutception-tab-content d-flex flex-column p-10px border-bottom border-color-grey background-color-grey"
      style={{
        left: 0,
        right: 0,
        zIndex: 1
      }}
    >
      <div className="d-flex justify-content-end" onClick={closeContent}>
        <i className="fas fa-window-close" aria-hidden="true"></i>
      </div>
      <ErrorBoundary>{<Component />}</ErrorBoundary>
    </div>
  )
}

export default Content
