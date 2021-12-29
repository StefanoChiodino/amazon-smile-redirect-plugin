if (typeof browser === 'undefined') browser = chrome
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const regex = /^www./;
    const url = new URL(details.url);
    url.host = url.host.replace(regex, "smile.");
    return { redirectUrl: url.toString() }
  },
  {
    urls: [
      "*://www.amazon.com/*",
      "*://www.amazon.co.uk/*",
      "*://www.amazon.de/*",
    ]
  },
  ['blocking']
)
