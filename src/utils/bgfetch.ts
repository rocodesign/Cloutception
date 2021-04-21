export function bgfetch(url, data = null, method = 'GET') {
  return new Promise((resolve, reject) => {
    try {
      chrome.runtime.sendMessage(
        {
          method,
          data,
          url
        },
        function (response) {
          if (response !== undefined && response !== '') {
            resolve(JSON.parse(response))
          } else {
            reject(null)
          }
        }
      )
    } catch (e) {
      console.warn(
        '[Cloutception] Failed to communicate with service worker ',
        e
      )
    }
  })
}
