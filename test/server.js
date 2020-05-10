var http = require('http');
var app = http.createServer();

// Socket.io server listens to our app
var io = require('socket.io').listen(app);

io.on('connection', function (socket) {
  // You will get this message when the server becomes 
  // available or a new socket it created
  socket.emit('success', {message: 'Server Accecpting Connections'});
  // This will send a message letting users know the server is
  // being sutdown.
  process.on('SIGINT', () => {
    io.emit('oops', {message: 'Server Shut Down'});
    process.exit();
  });
  // This handles the authentication and related messages.
  socket.on('authenticate', function (payload) {
    let data = JSON.parse(payload.data);
    if (data.password == 'passwd' && data.username == 'admin') {
      // This is managed in the Vue.js since it is not a feedback message.
      socket.emit('auth', { jwt: 'Generated JWT Token'} );
      // We emit to two seperate message queues that are handled in store.js
      // so they are universal.
      socket.emit('success', { message: 'You are logged in' });
      socket.emit('info', { message: 'JWT Token Attached', jwt: 'GeneRAtEdJwTOken' });
    } else {
      // error message got picked up so changed to opps handled in store.js
      socket.emit('oops', { message: 'Invalid Credentials Supplied' })
    }
  });
});

app.listen(8910);
console.log('Server listening on 8910');