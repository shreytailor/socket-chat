class Users {
    constructor() {
        this._userList = [];
    }

    addUser(user) {
        _userList.push(user);
    }

    removeUser(uuid) {
        _userList = _userList.map((user) => {
            if (user.uuid !== uuid) {
                return user;
            }
        });
    }

    get list() {
        return _userList;
    }
}

module.exports = Users;