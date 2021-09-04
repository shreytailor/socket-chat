const Users = require("models/Users");

const users = new Users();

function UserHandler(io, socket) {
    
    // Adding new user's identity to the current list.
    let user = new User(socket.handshake.query);
    users.addUser(user);

    // Update everyone about the newly connected user.
    io.emit("users:update", connectedUsers);

    function DisconnnectedUser() {

        // Remove the disconnected user, and update everyone.
        users.removeUser(socket.handshake.query.uuid);
        io.emit("users:update", users.list);
    }

    socket.on("disconnect", DisconnnectedUser);
}

module.exports = UserHandler;