const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catagorySchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: 'itemSchema'
    }]
},
{timeStamp: true});

// export default mongoose.model('Catagory', CatagorySchema);

const catagoryModel = mongoose.model('catagorySchema', catagorySchema);
module.exports = catagoryModel;
