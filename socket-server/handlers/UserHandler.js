const Users = require("models/Users");

// This variable will track the active users in our server.
const users = new Users();

/**
 * This function is called for a newly connected user, when they join. It tries to configure
 * certain callbacks for events such "users:connect" which is a custom event, as well as "disconnect"
 * which may be fired from the frontend if the user terminates their connection.
 * @param {*} io, the socket.io server instance.
 * @param {*} socket, socket of the newly connected client.
 */
function UserHandler(io, socket) {

    /**
     * This function is the callback for the "users:connect" custom event. It adds the details of
     * the new user to our collection of users, and emits an update to all connected users (including
     * the new user).
     * @param {*} payload, the payload received from the client application, which is an object that
     * contains a 'uuid' and 'userName' attribute.
     */
    function ConnectedUser(payload) {

        // Add the connected user, and update everyone.
        users.addUser(socket, payload);
        io.emit("users:update", users.list);
    }

    /**
     * This function is the callback for the "disconnect" event. It removes our client from the
     * internal list, and sends an updated list of clients to all other connected clients.
     */
    function DisconnnectedUser() {

        // Remove the disconnected user, and update everyone.
        users.removeUser(socket);
        io.emit("users:update", users.list);
    }

    // Registering the handlers of different events.
    socket.on("users:connect", ConnectedUser);
    socket.on("disconnect", DisconnnectedUser);
}

module.exports = UserHandler;