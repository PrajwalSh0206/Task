const mongoose=require('mongoose');
const { Schema } = mongoose;


const UsersSchema = new Schema({
  email:String,
  users:Number,
  amount:Number,
  subscription:String,
},{
    collection:'Subscription'
}
);

module.exports=mongoose.model('Sub', UsersSchema);