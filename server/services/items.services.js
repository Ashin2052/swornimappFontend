const itemModel = require('../models/Items');
let multer  = require('multer');
// var upload=require('../utilities/file.storage')
class Item {
    constructor() {}

    addItem(payload) {
        return new Promise((resolve, reject) => {
            const item = new itemModel({
                title:payload.title,
               _id: new mongoose.Types.ObjectId(),
                description:payload.description,
                showCorousal:payload.showCorousal,
                imageURL:payload.file,
                catagory:payload.catagory
            });
            item
                .save()
                .then(result => {
                  res.status(201).json({
                    message: "Created item successfully",
                    createditem: {
                      title:result.title,
                      catagory:result.catagory,
                      description:result.description,
                      _id: result._id,
                      request: {
                        type: 'GET',
                        url: "http://localhost:3000/items/" + result._id
                      }
                    }
                  });
                })
                .catch(e => reject(e));
        });
    }

    getItemList() {
        return new Promise((resolve, reject) => {
            itemModel
                .find()
                .then(d => {
                    console.log(d);
                    resolve(d);
                })
                .catch(e => reject(e));
        });
    }
    getParlicaulaItem(pid) {
        return new Promise((resolve, reject) => {
            itemModel
                .findById({ _id: pid })
                .then(d => {
                    resolve(d);
                })
                .catch(e => reject(e));
        });
    }
    deleteItem(id) {
        return new Promise((resolve, reject) => {
            itemModel
                .findByIdAndDelete(id)
                .then(d => resolve(d))
                .catch(e => reject(e));
        });
    }

    updateItem(payload, pId) {
        return new Promise((resolve, reject) => {
            itemModel
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
module.exports = new Item();
