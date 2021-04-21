const dispatcher = document.createElement('div')

chrome.runtime.onMessage.addListener((message) => {
  const e = new CustomEvent(message.type, { detail: message.detail })
  dispatcher.dispatchEvent(e)
  return true
})

export default dispatcher
