// import mongoose from "mongoose";

// const connectDB = async () => {
//     try {
//         mongoose.connection.on("connected", ()=> {console.log("Database connected successfully")})

//         let mongodbURI = process.env.MONGODB_URI;
//         const projectName= 'resume-builder-ai';

//         if(!mongodbURI){
//             throw new Error("MONGODB_URI environment variable not set")
//         }

//         if(mongodbURI.endsWith('/')){
//             mongodbURI = mongodbURI.slice(0, -1)
//         }

//         await mongoose.connect(`${mongodbURI}/${projectName}`)
//     } catch (error) {
//         console.error("Error connecting to MongoDB:",error)
//     }
// }

// export default connectDB;



import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
};

export default connectDB;
