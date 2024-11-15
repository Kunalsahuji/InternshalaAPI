const mongoose = require('mongoose');
exports.conncectDatabase = async () => {
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log("Database Connection Established!")
    } catch (error) {
        console.log(error.message)
    }
}