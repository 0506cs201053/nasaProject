const mongoose=require('mongoose');

const launchesSchema=new mongoose.Schema({
    flightNumber:{
        type:Number,
        required:true,
    },
    mission:{
        type:String,
        required:true,
    },
    rocket:{
        type:String,
        required:true,
    },
    // target:{
    //     type:mongoose.ObjectId,
    //     ref:'Planet'
    // }
    launchDate:{
        type:Date,
        required:true,
    },
    target:{
        type:String,
    },
    customer:[String],
    upcoming:{
        type:Boolean,
        required:true,
    },
    success:{
        type:Boolean,
        required:true,
        default:true,
    },

});


//connects launchesSchema with the launches collection

module.exports=mongoose.model('Launch',launchesSchema);