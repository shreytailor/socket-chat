require('rootpath')();
require('dotenv').config();

// Configuring the socket server.
const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer, {
    cors: {

        // Allowing CORS for access from all origins.
        origin: "*"
    }
});

// Importing the socket handlers.
const registerUserHandler = require("handlers/UserHandler.js");
const registerMessageHandler = require("handlers/MessageHandler");

// Registering the socket handlers.
function onConnection(socket) {
    registerUserHandler(io, socket);
    registerMessageHandler(io, socket);
}

// Starting the server, and receiving connections with our custom callback.
io.on("connection", onConnection);
httpServer.listen(process.env.PORT);
console.log(`Server is running on Port ${process.env.PORT}...`);