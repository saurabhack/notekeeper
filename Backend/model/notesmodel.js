import mongoose, { model } from "mongoose";

const notes= mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        require:true,
    },
    pin:{
        type:Boolean,
        require:false
    }
})

const notekeeper=mongoose.model('notes',notes)
export default notekeeper