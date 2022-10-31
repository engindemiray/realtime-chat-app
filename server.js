const express = require('express')
const socket = require('socket.io')

const app = express();
const server = app.listen(3000);

app.use(express.static('public'));

const io = socket(server);

io.on('connection', (socket) => {
    console.log('User connected: ' + socket.id)

    socket.on('chat', data => {
        io.sockets.emit('chat', data)
    })

    socket.on('typing', data => {
        socket.broadcast.emit('typing', data)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected: ' + socket.id)
      })
})