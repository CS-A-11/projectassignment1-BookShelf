var mongoose = require("mongoose");
var bookSchema=new mongoose.Schema({
    name:String,
    description:String,
    Author:String,
    condition: { type: Number, default: 0, min: 0, max: 10 },
    price : {type:Number , default:0, min:0}
});
mongoose.model("Book", bookSchema);

