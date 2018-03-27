const WebSocket = require('ws')

const WebSocketServer = WebSocket.Server

const wss = new WebSocketServer({
  port: 3300
})

wss.on('connection', (ws) => {
  console.log('====================================');
  console.log('[SERVER] connection()');
  console.log('====================================');
  
  ws.on('message', (message) => {
    console.log(`[SERVER] Received: ${message}`);
    setTimeout(() => {
      ws.send(`What's your name?`, (err) => {
        if (err) {
          console.log(`[SERVER] error: ${err}`);
        }
      })
    }, 1000)
  })
})

console.log('ws server started at port 3300...');

let count = 0

let ws = new WebSocket('ws://localhost:3300/ws/chat')

ws.on('open', () => {
  console.log(`[CLIENT] open()`);
  ws.send('Hello!')
})

ws.on('message', (message) => {
  console.log(`[CLIENT] Received: ${message}`);
  count ++
  if (count > 3) {
    ws.send('8~8')
    ws.close()
  } else {
    setTimeout(() => {
      ws.send(`Hello, I'm Mr No.${count}!`)
    }, 1000)
  }
})