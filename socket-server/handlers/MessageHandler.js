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
        io.emit("messages:new", payload);
    }

    socket.on("messages:new", OnNewMessage);
}

module.exports = MessageHandler;