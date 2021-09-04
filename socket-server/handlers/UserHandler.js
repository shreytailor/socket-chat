const Users = require("models/Users");

const users = new Users();

function UserHandler(io, socket) {

    function ConnectedUser(payload) {

        // Add the connected user, and update everyone.
        users.addUser(socket, payload);
        io.emit("users:update", users.list);
    }

    function DisconnnectedUser() {

        // Remove the disconnected user, and update everyone.
        users.removeUser(socket);
        io.emit("users:update", users.list);
    }

    socket.on("users:connect", ConnectedUser);
    socket.on("disconnect", DisconnnectedUser);
}

module.exports = UserHandler;