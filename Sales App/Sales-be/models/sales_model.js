const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
     product_name : {
        type : String,
        required : true
     },
     product_quantity : {
        type : Number,
        required : true
     },
     product_amount : {
        type : Number,
        required : true
     }
});

mongoose.model("SalesModel", salesSchema);