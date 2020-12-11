import { timeStamp } from 'console';
import mongoose, { Schema } from 'mongoose';

const CatagorySchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },
    products: [{
      type: Schema.Types.ObjectId,
      ref: 'Item'
    }]
},
{timeStamp: true});

export default mongoose.model('Catagory', CatagorySchema);
