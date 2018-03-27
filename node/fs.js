const fs = require('fs')

// 阻塞
let data = fs.readFileSync('./fs.txt')

console.log(data.toString())
console.log('====================================');
console.log('程序1执行结束');
console.log('====================================');

// 非阻塞
// 执行异步操作的函数将回调函数作为最后一个参数， 回调函数接收错误对象作为第一个参数
let data2 = fs.readFile('fs.txt', (err, data) => {
  if (err) return console.error(err)
  console.log('====================================');
  console.log(data.toString());
  console.log('====================================');
})
console.log('====================================');
console.log('程序2执行结束');
console.log('====================================');