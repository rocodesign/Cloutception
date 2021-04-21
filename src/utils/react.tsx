import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { getTabSelector, getTopBar } from './page'

export const PortalWrapper = ({ component, anchorPromise }) => {
  const [anchor, setAnchor] = useState()
  useEffect(() => {
    anchorPromise.then((elem) => {
      setAnchor(elem)
    })
  }, [])

  return anchor ? <>{ReactDOM.createPortal(component, anchor)}</> : null
}

export async function tabsAnchor() {
  const tabSelector = await getTabSelector()

  let tabsAnchor: HTMLDivElement = document.querySelector(
    '.cloutception-tabs-anchor'
  )
  if (tabsAnchor) {
    tabsAnchor.parentElement.removeChild(tabsAnchor)
  }

  tabsAnchor = document.createElement('div')
  tabsAnchor.className =
    'cloutception-tabs-anchor d-flex align-items-center h-100'
  tabsAnchor.style.justifyContent = 'flex-end'
  tabsAnchor.style.flexGrow = '1'
  tabSelector.firstChild.appendChild(tabsAnchor)
  return tabsAnchor
}

export async function contentAnchor() {
  const tabSelector = await getTabSelector()
  const tabContent: HTMLDivElement = tabSelector.parentElement as HTMLDivElement
  let contentAnchor: HTMLDivElement = document.querySelector(
    '.cloutception-content-anchor'
  )
  if (contentAnchor) {
    contentAnchor.parentElement.removeChild(contentAnchor)
  }
  contentAnchor = document.createElement('div')
  contentAnchor.style.top = '0'
  contentAnchor.style.left = '0'
  contentAnchor.style.right = '0'
  contentAnchor.className =
    'cloutception-content-anchor d-flex flex-column background-color-grey'
  tabContent.insertBefore(contentAnchor, tabSelector.nextElementSibling)
  return contentAnchor
}

export async function statusAnchor() {
  return await getTopBar()
}
