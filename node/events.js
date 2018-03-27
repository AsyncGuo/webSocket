// 引入 events 模块
const events = require('events')
// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter()
// 创建事件处理程序
let connectHandle = () => {
  console.log('连接成功')
  // 触发 data_received 事件 
  eventEmitter.emit('data_received')
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandle)

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', () => {
  console.log('====================================');
  console.log('数据接收成功');
  console.log('====================================');
})
// 触发 connection 事件 
eventEmitter.emit('connection')

console.log('====================================');
console.log('执行完毕');
console.log('====================================');