/**
 * This is a model class for a User.
 */
class User {
    constructor(connectionString) {
        this._uuid = connectionString.uuid;
        this._username = connectionString.username;
    }

    get uuid() {
        return this._uuid;
    }

    get username() {
        return this._username;
    }

    set uuid(uuid) {
        this._uuid = uuid;
    }

    set username(username) {
        this._username = username;
    }
}

module.exports = User;