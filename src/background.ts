import { NAVIGATION_EVENT } from './constants'

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.method === 'GET') {
    var url = request.url
    fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.text())
      .then((response) => sendResponse(response))
      .catch()
    return true
  }
  if (request.method === 'POST') {
    fetch(request.url, {
      method: 'POST',
      headers: {
        Accept: 'application/json, application/xml, text/plain, text/html, *.*',
        'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
      },
      body: 'result=' + request.data
    })
      .then((response) => response.json())
      .then((response) => sendResponse(response))
      .catch((error) => console.log('Error:', error))
    return true
  }
})

const handleHistoryEvent = (
  event: chrome.webNavigation.WebNavigationTransitionCallbackDetails
) => {
  if (
    ((event as unknown) as chrome.webNavigation.WebNavigationParentedCallbackDetails)
      .parentFrameId !== -1
  ) {
    return
  }

  chrome.tabs.sendMessage(event.tabId, {
    type: NAVIGATION_EVENT,
    detail: event.url
  })
}

chrome.webNavigation.onHistoryStateUpdated.addListener(handleHistoryEvent)
