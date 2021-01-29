const jwt = require("jsonwebtoken");
const sec = require("../config");
const userModel = require("../models/user");
class filesFind {
    constructor() {}

    signUp(payload) {
        return new Promise((resolve, reject) => {
            userModel
                .findOne({
                    userName: payload.userName
                })
                .then(d => {
                    if (d) {
                        resolve("usr already exist");
                    } else {
                        let obj = new userModel(payload);
                        obj
                            .save()
                            .then(d => resolve(d))
                            .catch(e => reject(e));
                    }
                });
        });
    }

    login(payload) {
        return new Promise((resolve, reject) => {
            userModel
                .findOne({
                    userName: payload.userName
                })
                .then(user => {
                    if (!user) {
                        reject({ statusCode: 403, message: "username incorrect" });
                    } else {
                        if (user.passWord == payload.passWord) {
                            const jwtToken = jwt.sign(
                                {
                                    userName: user.userName,
                                    passWord: user.passWord,

                                },
                                sec.secret,
                                {
                                    expiresIn: "12h"
                                }
                            );
                            var userMap = {
                                id: user._id,
                                userName: user.userName
                            };
                            const obj = { jwtToken, userMap };
                            resolve(obj);
                        } else {
                            reject({ statusCode: 403, message: "password incorrect" });
                        }
                    }
                });
        });
    }
    mapresult(list) {
        let listArr = [];
        if (list.length > 1) {
            list.forEach(element => {
                var obj = {
                    userName: element.userName,

                    id: element._id
                };
                listArr.push(obj);
            });
        } else {
            var obj = {
                id: list._id,
                userName: list.userName,

            };
            listArr.push(obj);
        }

        return listArr;
    }
    getUserList() {
        return new Promise((resolve, reject) => {
            userModel
                .find()
                .sort({ name: 1 })
                .select("-passWord")
                .sort({ firstName: 1 })
                .then(d => {
                    resolve(d);
                })
                .catch(e => reject(e));
        });
    }

    listFoldersAndFiles(path) {
        return new Promise((resolve, reject) => {
            console.log(path, "path");
            readdir(path)
                .then(files => {
                    resolve(files);
                })
                .catch(e => {
                    reject(e);
                });
        });
    }

    deleteUser(id) {
        return new Promise((resolve, reject) => {
            userModel
                .findByIdAndDelete(id)
                .then(d => resolve(d))
                .catch(e => reject(e));
        });
    }

    updateUser(payload, userId) {
        return new Promise((resolve, reject) => {
            userModel
                .findByIdAndUpdate(
                    {
                        _id: userId
                    },
                    {
                        $set: payload
                    },
                    {
                        new: true
                    }
                )
                .select("-passWord")
                .then(d => {
                    resolve(d);
                })
                .catch(e => reject(e));
        });
    }
}

module.exports = new filesFind();
