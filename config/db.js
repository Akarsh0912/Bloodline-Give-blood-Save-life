const mongoose =  require("mongoose")


const DB_NAME = require("../constant.js")


const connectDB  = async ()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MongoDB connected !!!! DB HOST: ${connectionInstance.connection.host}`)

        
    } catch (error) {
        console.log(`CONNECTION FROM DATABASE IS FAILED ${error}`);
        process.exit(1);
    }
}


module.exports = connectDB