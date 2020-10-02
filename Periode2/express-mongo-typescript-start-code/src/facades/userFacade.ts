const bcrypt = require("bcryptjs");

interface IGameUser {
  name: string;
  userName: string;
  password: string;
  role: string;
}

const users: Array<IGameUser> = [];

module.exports = class UserFacade {
  static addUser(user: IGameUser): boolean {
    bcrypt.genSalt(10, function (err: Error, salt: string) {
      if (err) throw Error(err.message);
      bcrypt.hash(user.password, salt, function (err: Error, hash: string) {
        user.password = hash;
      });
    });
    users.push(user);
    return true;
  }

  static deleteUser(userName: string): boolean {
    const user = users.find((u) => u.userName === userName);
    if (!user) throw Error("user not found");
    const index = users.indexOf(user);
    users.splice(index, 1);
    return true;
  }
  static getAllUsers(): Array<IGameUser> {
    return users;
  }
  static getUser(userName: string): IGameUser {
    const user = users.find((u) => u.userName === userName);
    if (!user) throw Error("user not found");
    return user;
  }
  static checkUser(userName: string, password: string): boolean {
    const user = users.find((u) => u.userName === userName);
    let result = false;
    bcrypt.compare(password, user?.password, function (
      err: Error,
      res: boolean
    ) {
      if (err) throw Error(err.message);
      result = res;
    });
    return result;
  }
};
