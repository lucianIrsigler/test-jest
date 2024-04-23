const mongoose = require('mongoose');

const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:42069/test-db?replicaSet=test-rs';

async function connectAndExit() {
    try {
        setTimeout(() => {
            mongoose.connect(mongoUri, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
         }, 1000);


        const userSchema = new mongoose.Schema({
            name: String,
            email: String,
            password: String,
        });

        const User = mongoose.model('User', userSchema);

        // Create a new user
        const newUser = new User({
            name: 'John Doe',
            email: 'john@example.com',
            password: 'password123',
        });

        // Save the user to the database
        await newUser.save();

        console.log('User created:', mongoose.model('User').find());
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
