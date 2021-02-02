const express = require('express'),
http = require('http'),
app = express(),
server = http.createServer(app),
io = require('socket.io').listen(server);

app.get('/', (req, res) => {
    res.send('Chat Server is running on port 3000')
});

io.on('connection', (socket) => {
    socket.emit('connected');

    socket.on('requestRandomChat',function(data){
        console.log('requestRandomChat');

        const rooms=io.sockets.manager.rooms;
        for (let key in rooms){
            if (key == ''){
                continue;
            }
            // 혼자있으면 입장
            if (rooms[key].length == 1){
                const roomKey = key.replace('/', '');
                socket.join(roomKey);
                io.sockets.in(roomKey).emit('completeMatch', {});
                socketRoom[socket.id] = roomKey;
                return;
            }
        }
        // 빈방이 없으면 혼자 방만들고 기다림.
        socket.join(socket.id);
        socketRoom[socket.id] = socket.id;
    });

    socket.on('cancelRequest',(data)=>{
        socket.leave(socketRoom[socket.id]);
    });

    socket.on('sendMessage',(data)=>{
        console.log('sendMessage!');
        io.in(socketRoom[socket.id]).emit('receiveMessage', data);
    });

    socket.on('disconnect',(data)=>{
        const key = socketRoom[socket.id];
        socket.leave(key);
        io.in(key).emit('disconnect');
        const clients = io.clients(key);
        for (let i = 0; i < clients.length; i++){
            clients[i].leave(key);
        }
    });
});


server.listen(3000,()=>{

console.log('Node app is running on port 3000');

});
