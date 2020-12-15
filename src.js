if (typeof browser === 'undefined') browser = chrome
browser.webRequest.onBeforeRequest.addListener(
  (details) => {
    const regex = /www(\.amazon\.((co\.uk)|(com)|(it)))/;
    cosnt url = new URL(details.url);
    const match = url.host.match(regex);
    if (match !== null) {
      url.host = 'smile' + match[0];
      return {redirectUrl: url.toString()}
    }
  },
  {urls: ["*://www.amazon.co.uk/*", "*://www.amazon.it/*"]},
  ['blocking']
)
