/**
 * This function handles the message-related events for the socket server.
 * @param {*} io, socket server instance
 * @param {*} socket, the client socket
 */
function MessageHandler(io, socket) {

    /**
     * A callback function, triggered when a client posts a new message.
     * @param {*} payload, the client payload
     */
    function OnNewMessage(payload) {
        io.emit("message:new", payload);
        console.log("Received...", payload);
    }

    socket.on("message:new", OnNewMessage);
}

module.exports = MessageHandler;