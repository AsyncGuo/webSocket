const http = require('http')
const fs = require('fs')
const url = require('url')

// 创建f服务器
http.createServer((req, res) => {
  // 解析请求，包括文件名
  let pathname = url.parse(req.url).pathname

  // 输出请求的文件名
  console.log("Request for " + pathname + " received.")

  // 从文件系统中读取请求的文件内容
  fs.readFile(pathname.substr(1), (err, data) => {
    if (err) {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
      res.writeHead(404, {'Content-type': 'text/plain'})
    } else {
      res.writeHead(200, {'Content-type': 'text/plain'})
      response.write(data.toString())
    }
    // 发送响应数据
    res.end()
  })
}).listen(3000)

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:3000/');