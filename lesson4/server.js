var express = require('express');
const { fstat } = require('fs');
var app = express();
var server = require('http').createServer(app)
var io = require('socket.io')(server)

app.use(express.static('.'))

app.get('/',(req,res)=>{
  res.redirect('index.html')
})

var messages = []

io.on('connection',(socket)=>{
  for(var i in messages){
    socket.emit('display', messages[i])
  }
    socket.on('newMessage', (msg)=>{
      messages.push(msg)
      io.sockets.emit('display', msg)
      const data = JSON.stringify(messages)
      fs.writeFileSync('data.json', data)
    })
    
  })

server.listen(3000)
