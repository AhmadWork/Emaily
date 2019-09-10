const mongoose = require('mongoose');
const {Schema} = mongoose;

let OrderSchema = new Schema ({
    _user:{type:Schema.Types.ObjectId,ref:'users'},
    _product:[{type:Schema.Types.ObjectId,ref:'products'}],
    _adress:{type:Schema.Types.ObjectId,ref:'adresses'},
    _paymentOption:{type:Schema.Types.ObjectId,ref:'payments'},
    _shippingOption:{type:Schema.Types.ObjectId,ref:'shippings'},
    trackingNo:String,
    status:String,
})

module.exports=mongoose.model('orders',OrderSchema);