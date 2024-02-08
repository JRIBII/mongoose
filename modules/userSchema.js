const mongoose=require('mongoose');

const {Schema}=mongoose;
const UserSchema=new Schema({
  "name": String,
  "email": String,
  "age":number
})
module.exports=mongoose.model('User',UserSchema)