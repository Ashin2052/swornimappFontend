const itemModel = require('../models/Items');
const catagoryModel = require('../models/catagory');

const mongoose = require("mongoose");
const fs=require('fs');
const path=require('path');
const { pid } = require('process');
const Schema = mongoose.Schema;

class Item {
    constructor() {}

    addItem(payload,image) {
        return new Promise((resolve, reject) => {
            const item = new itemModel({
                name:payload.name,
                description:payload.description,
                image:image.filename,
                price:payload.price,
                showCorousal:payload.showCorousal,
                catagory:payload.catagory,
            });
               item.save()
                .then(async(result) => {
            await   catagoryModel.update(  
                    { _id: payload.catagory }, { $push: { products: result._id } })
                    resolve({
                    message: "Created item successfully",
                    createditem: result
                  });
                })
                .catch(e => {
                     reject(e)
                });
        });
    }

    getItemList(page,body) {
        return new Promise((resolve, reject) => {
            page=page-1;
            let itemsPerPage=15;
            itemModel
                .find(body)
                .populate( 'catagory')
                .skip(page*itemsPerPage)
                .limit(itemsPerPage)
                .then(d => {
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
                .then( d =>{
                    catagoryModel.update({ 
                        "products" : { $in : [id] } 
                    }, { 
                        $pullAll : { "products" : [id] }
                    } , (err, subject) => {
                
                    })
                   
                    fs.unlink(path.join(process.cwd(),'\\assets\\image\\'+d.image),err => {
                        reject(err)
                    })
                    resolve(d)})
                .catch(e => reject(e));
        });
    }

    updateItem(payload, pId,image) {
        return new Promise(async (resolve, reject) => {
            let productObj;
            if(image)
            {
                productObj={
                    name:payload.name,
                    description:payload.description,
                    image:image.filename,
                    price:payload.price,
                    catagory:payload.catagory,
                    showCorousal:payload.showCorousal
                }
            }
             else
                {
                    productObj={  name:payload.name,
                        description:payload.description,
                        price:payload.price,
                        catagory:payload.catagory,
                        showCorousal:payload.showCorousal}
                }
            itemModel
                .findByIdAndUpdate({
                    _id: pId
                }, {
                    $set: productObj
                }, {
                    new: true
                })
                .then(d => {
                    if(image)
                    {
                        fs.unlink(path.join(process.cwd(),'\\assets\\image\\'+payload.previousImage),err => {
                            reject(err)
                        })
                    }
                    resolve(d);
                })
                .catch(e => {
                    fs.unlink(path.join(process.cwd(),image.path),err => {
                        reject(err)
                    })
                    reject(e)
                });
        });
    }

}
module.exports = new Item();
