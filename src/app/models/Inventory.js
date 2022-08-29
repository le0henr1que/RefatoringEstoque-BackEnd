const mongoose = require('mongoose')

const Inventory = mongoose.Schema(
    {
        name:{type:String, required:true},
        description:{type:String, required:true},
        amount:{type:Number, required:true}, 
    }, 
    {
        timestamps:true
    }
)

module.exports = mongoose.model('inventory', Inventory)