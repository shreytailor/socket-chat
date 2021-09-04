const Users = require("models/Users");

const users = new Users();

function UserHandler(io, socket) {

    function ConnectedUser(payload) {

        // Add the connected user, and update everyone.
        users.addUser(payload);
        io.emit("users:update", users.list);
    }

    function DisconnnectedUser() {

        // Remove the disconnected user, and update everyone.
        users.removeUser(socket.handshake.query.uuid);
        io.emit("users:update", users.list);
    }

    socket.on("users:connect", ConnectedUser);
    socket.on("users:disconnect", DisconnnectedUser);
}

module.exports = UserHandler;