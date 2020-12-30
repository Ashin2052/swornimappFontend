import mongoose, { Schema } from 'mongoose';

const ItemSchema = new Schema({
   title: {
     type: String
   },
   description: {
     type: String
   },
  showCorousal: {type: Boolean},
  isLatest:{type:Boolean},
    Category: {
      type: Schema.Types.ObjectId,
      ref: 'Catagory'
    },
  imageUrl:{
     type:String,
     required:true
  }
},
{timeStamp: true });

export default mongoose.model('Item', ItemSchema);
