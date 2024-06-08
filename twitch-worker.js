addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  // 从环境变量中获取目标区域
  const targetRegion = TARGET_REGION || 'default-region';

  // 打印当前目标区域
  console.log(`Routing to region: ${targetRegion}`);
  
  // 修改请求头，以指示目标区域
  let modifiedRequest = new Request(request);
  if (targetRegion === 'HKG') {
    // 仅示例：你可以根据实际情况进行调整
    modifiedRequest.headers.set('X-Target-Region', 'HKG');
  }

  // 发送修改后的请求到目标区域
  return fetch(modifiedRequest);
}
