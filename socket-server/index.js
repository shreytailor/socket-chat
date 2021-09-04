require('rootpath')();
require('dotenv').config();

// Configuring the socket server.
const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer, {
    cors: {

        // Allowing CORS for all origins.
        origin: "*"
    }
});

// Importing the socket handlers.
const registerMessageHandler = require("handlers/MessageHandler");

// Registering the socket handlers.
function onConnection(socket) {
    registerMessageHandler(io, socket);
}

// Starting the server.
io.on("connection", onConnection);
httpServer.listen(process.env.PORT);
console.log(`Server is running on Port ${process.env.PORT}...`);