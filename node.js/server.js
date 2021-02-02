const express = require('express'),
http = require('http'),
app = express(),
server = http.createServer(app),
io = require('socket.io').listen(server);

app.get('/', (req, res) => {
    res.send('Chat Server is running on port 3000')
});

io.on('connection', (socket) => {
    const userId = await fetchUserId(socket);

    socket.join(userId);
  
    // and then later
    io.to(userId).emit('hi');
    
    //socket.join('some room');

    socket.on('add user', (id, msg) =>{
        socket.to(id).emit('my message', msg);
    });

    socket.on('new message', (data,callback) => {
        if(data){
            callback('success',data);
        }else{
            callback('fail');
        }
        console.log(data);
        //socket.send(data);
        socket.to(userid).emit('new message', {
            username: socket.username,
            message: data
        });
    
    });
    
    socket.on('new message1', (data,callback) => {
        //log the message in console 

        //    console.log(senderNickname+" :" +messageContent)
        //     //create a message object 
        //    let  message = {"message":messageContent, "senderNickname":senderNickname}
        //       // send the message to the client side  
        //    io.emit('message', message );{
        if(data){
            callback('success',data);
        }else{
            callback('fail');
        }
        console.log(data);
        //socket.send(data);
        socket.emit('new message', {
            username: socket.username,
            message: data
        });
        
    });
        
    
    socket.on('disconnect', function() {
        console.log('user has left')
        socket.broadcast.emit("userdisconnect"," user has left ") 

    });

});


server.listen(3000,()=>{

console.log('Node app is running on port 3000');

});
