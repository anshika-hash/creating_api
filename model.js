const mongoose = require('mongoose');

const userSchema =new mongoose.Schema({
   email:{type: 'string',required: true},
   password:{type: 'string',required: true}
})


const UserModel = new mongoose.model('User',userSchema);
module.exports  = UserModel;