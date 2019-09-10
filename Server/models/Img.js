const mongoose= require('mongoose');
const { Schema } = mongoose;

const ImgSchema = new Schema({
    src:String,
    caption:String,
    _product:{type:Schema.Types.ObjectId, ref:'products'}
})

module.exports=mongoose.model('imgs',ImgSchema);