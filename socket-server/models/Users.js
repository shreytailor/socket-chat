/**
 * This is a model class for Users, so it accumulates details about all the connected users.
 */
class Users {
    constructor() {
        this._userList = new Map();
    }

    addUser(socket, user) {
        this._userList.set(socket, user);
    }

    removeUser(socket) {
        this._userList.delete(socket);
    }

    get list() {
        return Array.from(this._userList.values());
    }
}

module.exports = Users;