import mongoose from "mongoose"
// import "../../envConfig"

export const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MONGODB_URL!)
        console.log("connected");
    } catch (error) {
        console.log("Error!!! \n", error);
        
    } 
}