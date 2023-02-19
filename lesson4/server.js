var express = require('express')
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
    })
})

server.listen(3000)
