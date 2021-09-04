class Users {
    constructor() {
        this._userList = [];
    }

    addUser(user) {
        this._userList.push(user);
    }

    removeUser(uuid) {
        this._userList = this._userList.map((user) => {
            if (user.uuid !== uuid) {
                return user;
            }
        });
    }

    get list() {
        return this._userList;
    }
}

module.exports = Users;