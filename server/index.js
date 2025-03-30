const http = require('http').createServer();

const io = require('socket.io')(http, {
    cors: { origin: "*"}
});

// Aqui eu criei uma função reativa a um evento, que só é executada quando chamada.
// Nesse caso, eu atribuo uma função callback ao evento connection, gerenciado pelo IO

// O socket representa a conexão de um cliente com o server, não todos.
io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('message', (message) => {
        console.log('message');

        // emit manda um evento para todos as conexões ouvirem.
        io.emit('message', `${socket.id.substr(0, 2)} said ${message}`);
    });
})

http.listen(8080, () => console.log('listening on http://localhost:8080'));