const express = require('express')
const fs = require('fs')

const app = express()

//添加的新用户数据
var user = {
  "user4" : {
     "name" : "mohit",
     "password" : "password4",
     "profession" : "teacher",
     "id": 4
  }
}

app.get('/addUser', (req, res) => {
  // 读取已存在的数据
  fs.readFile(__dirname + '/users.json', 'utf-8', (err, data) => {
    data = JSON.parse(data)
    data["user4"] = user["user4"];
    console.log( data );
    res.end( JSON.stringify(data));
  })
})

const server = app.listen(3008, () => {
  let host = server.address().address
  let port = server.address().port

  console.log('====================================');
  console.log("应用实例，访问地址为 http://%s:%s", host, port);
  console.log('====================================');
})