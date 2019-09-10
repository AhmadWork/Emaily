const mongoose = require('mongoose')
const { Schema } = mongoose

CartSchema = new Schema({
    _product:[{type:Schema.Types.ObjectId,ref:'products'}]

})

module.exports = mongoose.model('carts',CartSchema);