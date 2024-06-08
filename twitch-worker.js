const GITHUB_REPO_URL = "";

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // 拦截到 Twitch 的请求
  if (request.url.includes("twitch.tv")) {
    // 复制原始请求
    let modifiedRequest = new Request(request)

    // 修改 User-Agent 为正常的浏览器 User-Agent
    modifiedRequest.headers.set('User-Agent', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.0.0 Safari/537.36')

    // 发送修改后的请求到 Twitch
    return fetch(modifiedRequest)
  }

  // 对于非 Twitch 请求，直接发送原始请求
  return fetch(request)
}
