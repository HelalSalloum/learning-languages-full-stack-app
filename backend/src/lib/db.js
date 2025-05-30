import mongoose from "mongoose"

export const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://helal:vuwb1998@cluster0.0nrnct5.mongodb.net/streamify_db?retryWrites=true&w=majority&appName=Cluster0");
        console.log(`MongoDB connected : ${conn.connection.host}`);
        
    } catch (error) {
        console.log("error in connectDB " , error);
        process.exit(1);
    }
}