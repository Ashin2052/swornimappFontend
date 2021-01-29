const catagoryModel = require("../models/catagory");
const mongoose = require("mongoose");
const itemModel = require("../models/Items");
const Schema = mongoose.Schema;

class Catagory {
    constructor() {}

    addCatagory(payload) {
        return new Promise((resolve, reject) => {
            let catagory = new catagoryModel(payload);
            catagory
                .save()
                .then(d => resolve(d))
                .catch(e => reject(e));
        });
    }

    getCatagoryList() {
        return new Promise((resolve, reject) => {
            catagoryModel
                .find()
                .populate('products')
                .then(d => {
                    resolve(d)
                })
                .catch(e => reject(e));
        });
    }

    getParlicaulaCatagory(pid) {
        return new Promise((resolve, reject) => {
            catagoryModel
                .findById({ _id: pid })
                .then(d => {
                    resolve(d);
                })
                .catch(e => reject(e));
        });
    }

    deleteCatagory(id) {
        return new Promise((resolve, reject) => {
            catagoryModel
                .findByIdAndDelete(id)
                .then(  async d => {
                    if(( itemModel.find({"catagory":"id"})).length>0)
                    {
                         itemModel.deleteMany({"catagory":"id"})
                    }
                    resolve(d)
                })
                .catch(e => reject(e));
        });
    }

    updateCatagory(payload, pId) {
        return new Promise((resolve, reject) => {
            catagoryModel
                .findByIdAndUpdate({
                    _id: pId
                }, {
                    $set: payload
                }, {
                    new: true
                })
                .then(d => {
                    resolve(d);
                })
                .catch(e => reject(e));
        });
    }

}
module.exports = new Catagory();
