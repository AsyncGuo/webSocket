const express = require('express')
const fs = require('fs')

const app = express()

app.get('/listUsers', (req, res) => {
  fs.readFile(__dirname + '/users.json', 'utf-8', (err, data) => {
    if (err) return console.error(err)
    console.log(data);
    res.end(data)
  })
})

const server = app.listen(3008, () => {
  let host = server.address().address
  let port = server.address().port

  console.log('====================================');
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
  console.log('====================================');
})