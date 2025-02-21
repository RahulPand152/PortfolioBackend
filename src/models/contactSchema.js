import mongoose, {Schema} from "mongoose";

const ConSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type:String
    },
    message:{
        type: String
    }
});

export  const Contacts = mongoose.model("Contacts", ConSchema)