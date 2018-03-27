const http = require('http')
const url = require('url')
const util = require('util')

http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'text/plain; charset=utf-8'})
  // 获取GET请求内容
  // res.end(util.inspect(url.parse(req.url, true)))
  let params = url.parse(req.url, true).query
  console.log('====================================');
  console.log(params);
  console.log('====================================');
  res.write("网站名：" + params.name)
  res.write("\n")
  res.write("网站 URL：" + params.url)
  res.end()
}).listen(3000)