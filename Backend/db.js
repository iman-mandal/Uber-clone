const mongoose = require('mongoose');

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MongoDB_URL);

        console.log("MongoDB connected");
    } catch (err) {
        console.error("MongoDB connection error:", err.message);
    }
}

module.exports = connectToDB;
