const { MongoClient } = require('mongodb');

const uri = `mongodb+srv://bollinenilohith9:Thefake.99np@cluster0.um7udn8.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const isConnected = client.connect();


module.exports = {
    client, isConnected
}