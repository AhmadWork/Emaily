const mongoose = require('mongoose')
const {Schema} = mongoose;

AddressSchema = new Schema({
    city:String,
    area:String,
    street:String,
    disc:String,
    _user:{type:Schema.Types.ObjectId,ref:'users'},
})

module.exports=mongoose.model('Addresses',AddressSchema);