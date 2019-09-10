const mongoose = require('mongoose');
const {Schema} = mongoose;

const ShippingSchema = new Schema({
    name:String,
    price:String
})

module.exports= mongoose.model('shippings',ShippingSchema);