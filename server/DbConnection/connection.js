const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb://0.0.0.0:27017/machineTest');
        console.log('MongoDB connected');
    } catch (error) {
        console.log('Error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB    