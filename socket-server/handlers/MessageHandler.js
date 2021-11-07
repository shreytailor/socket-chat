/**
 * This function handles the message-related events for the socket server. These events include
 * "messages:new" which is fired when there is a new message from someone.
 * @param {*} io, the socket.io server instance.
 * @param {*} socket, socket of the newly connected client.
 */
function MessageHandler(io, socket) {

    /**
     * A callback function, triggered when a client posts a new message.
     * @param {*} payload, the payload received from the client application, which is an object that
     * contains a 'uuid', 'text', and 'sender' property which is just the details of the user sending
     * the message.
     */
    function OnNewMessage(payload) {
        io.emit("messages:new", payload);
    }

    // Registering the handlers of different events.
    socket.on("messages:new", OnNewMessage);
}

module.exports = MessageHandler;