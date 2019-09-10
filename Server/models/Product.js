const mongoose = require('mongoose');
const {Schema} = mongoose ;

let ProductSchema = new Schema({
    name: {type: String, required: true, max: 100},
    disc:String,
    price: {type: Number, required: true},
    quantity:Number,
    _img:[{type:Schema.Types.ObjectId,ref:'imgs'}],
    

});


// Export the model
module.exports = mongoose.model('products', ProductSchema);