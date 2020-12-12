const productModel = require('../models/product.db');
let multer  = require('multer');
// var upload=require('../utilities/file.storage')
class Product {
    constructor() {}

    addproduct(payload) {
        return new Promise((resolve, reject) => {
            const product = new productModel(payload);
            product
                .save()
                .then(d => {
                    resolve(d);
                  })
                .catch(e => reject(e));
        });
    }

    getproductList() {
        return new Promise((resolve, reject) => {
            productModel
                .find()
                .then(d => {
                    console.log(d);
                    resolve(d);
                })
                .catch(e => reject(e));
        });
    }
    getParlicaulaproduct(pid) {
        return new Promise((resolve, reject) => {
            productModel
                .findById({ _id: pid })
                .then(d => {
                    resolve(d);
                })
                .catch(e => reject(e));
        });
    }
    deleteproduct(id) {
        return new Promise((resolve, reject) => {
            productModel
                .findByIdAndDelete(id)
                .then(d => resolve(d))
                .catch(e => reject(e));
        });
    }

    updateproduct(payload, pId) {
        return new Promise((resolve, reject) => {
            productModel
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
module.exports = new Product();
