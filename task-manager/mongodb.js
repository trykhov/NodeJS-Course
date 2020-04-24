// Create, Read, Update, and Delete (CRUD) 
const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient // gives us access to function necessary to access desired database

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) => {
    if(error) {
        return console.log("Unable to connect to database")
    }

    const db = client.db(databaseName);

    // insert document to user's collection
    db.collection('user').insertOne({
        name: 'Try',
        age: 24
    }, (err, res) => {
        if(err) return console.log("Unable to insert user");
        console.log(res.ops);
    })
})