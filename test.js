const mongoose = require('mongoose');

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:42069/your-database?replicaSet=test-rs';

async function connectAndExit() {
    try {
        setTimeout(() => {
            mongoose.connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
         }, 1000);
        console.log('Connected to MongoDB');

        // Perform any database-related setup or testing here

        // Close the MongoDB connection
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
    } finally {
        process.exit(0); // Ensure the process exits
    }
}

connectAndExit();
