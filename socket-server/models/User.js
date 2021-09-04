class User {
    constructor(connectionString) {
        this._uuid = connectionString.uuid;
        this._username = connectionString.username;
        this._color = connectionString.color;
    }

    get uuid() {
        return this._uuid;
    }

    get username() {
        return this._username;
    }

    get color() {
        return this._color;
    }

    set uuid(uuid) {
        this._uuid = uuid;
    }

    set username(username) {
        this._username = username;
    }

    set color(color) {
        this._color = color;
    }
}

module.exports = User;