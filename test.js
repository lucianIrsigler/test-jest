const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://172.17.0.1:27017/';

// Database Name
const dbName = 'test';

// Create a new user object
const newUser = {
    username: 'john',
    password: 'password123',
    email: 'john@example.com'
};

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
    if (err) {
        console.error('Failed to connect to MongoDB:', err);
        return;
    }

    console.log('Connected successfully to MongoDB');

    const db = client.db(dbName);

    // Get the "Users" collection
    const usersCollection = db.collection('Users');

    // Insert the new user into the "Users" collection
    usersCollection.insertOne(newUser, function(err, result) {
        if (err) {
            console.error('Failed to insert user:', err);
            return;
        }

        console.log('User added successfully:', result.ops[0]);
        client.close();
    });
});