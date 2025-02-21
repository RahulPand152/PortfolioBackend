import mongoose from "mongoose";
import { D_name } from "../constants.js";


const connectDB = async () =>{

    try {
        
        const connectionInstance =   await mongoose.connect(`${process.env.MONGOBD_URI}/${D_name}`)
        console.log(`\n MongDb connection || Db Host: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.log("MONGOOSE CONNECTION failed", error)
    }
}

export default connectDB