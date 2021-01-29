const mongoose=require('mongoose')
const Schema = mongoose.Schema;

var itemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    description:{
        type:String,
        required:true
    },
    image:{
      type:String,
      required:true,
        unique:true,
    },
    catagory:{ type: Schema.Types.ObjectId, ref: 'catagorySchema'},
    showCorousal:{
      type:Boolean,
      default:false
    },
    price:
    {
      type:Number
    }
  },
{
    timestamps:true

});

const itemModel = mongoose.model("itemSchema", itemSchema);
module.exports=itemModel;
