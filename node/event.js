// 引入 events 模块
const events = require('events')
// 创建 eventEmitter 对象
const eventEmitter = new events.EventEmitter()

// EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义。对于每个事件，EventEmitter 支持 若干个事件监听器。

// 监听器 #1
let listener1 = () => {
  console.log('监听器 listener1 执行')
}

// 监听器 #2
let listener2 = () => {
  console.log('监听器 listener2 执行')
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1)

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2)

let eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection')
console.log(eventListeners + " 个监听器监听连接事件。")

// 处理 connection 事件 
eventEmitter.emit('connection')

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1)
console.log("listener1 不再受监听。")

// 触发连接事件
eventEmitter.emit('connection')

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection')
console.log(eventListeners + " 个监听器监听连接事件。")

console.log("程序执行完毕。")

// let errorHandle = (err) => {
//   console.log('====================================');
//   console.log('err');
//   console.log('====================================');
// }
// eventEmitter.on('error', errorHandle)
// eventEmitter.emit('error')