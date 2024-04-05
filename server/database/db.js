import mongoose from 'mongoose';

// mongoose.connect(URL);

export const connectDb = async () => {
    const URL = `mongodb+srv://namangoel781:Naman%40781@cluster0.ypvnvi3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL);
        console.log("connection established")
    } catch (error) {
        console.log("database fail");
        console.log(error);
        process.exit(0);
    }
}

export default connectDb;
// module.exports = connectDb;