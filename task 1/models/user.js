const mongoose=require('mongoose');
const { Schema } = mongoose;


const UsersSchema = new Schema({
  email: {type:String},
  name: String,
  hash: String,
  id: String
},{
    collection:'Users'
}
);

module.exports=mongoose.model('Users', UsersSchema);