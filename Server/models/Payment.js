const mongoose = require('mongoose');
const {Schema} = mongoose;

PaymentSchema = new Schema ({
    type:String
})

module.exports= mongoose.model('payments',PaymentSchema);