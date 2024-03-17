const WebSocket = require('ws');
const { MongoClient } = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';
const dbName = 'bugtool';
const collectionName = 'bug';

const wss = new WebSocket.Server({ port: 3001 });
let client;
let messages = [];

MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((connectedClient) => {
    console.log('Connected to MongoDB');
    client = connectedClient;
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    try {
      const data = JSON.parse(message);
      const receivedMessage = data.message;
      console.log('Received message:', receivedMessage);
      
      messages.push(receivedMessage);
      
      wss.clients.forEach(function each(client) {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ type: 'message', message: receivedMessage }));
        }
      });
    } catch (error) {
      console.error('Error parsing message:', error);
    }
  });
});

setInterval(() => {
    if (client && messages.length > 0) {
      const db = client.db(dbName);
      const collection = db.collection(collectionName);
      
      const combinedMessage = { message: messages.join(', ') };
      
      collection.insertOne(combinedMessage)
        .then(() => {
          console.log('Messages stored in MongoDB');
          console.log(combinedMessage);
          messages = [];
        })
        .catch((err) => {
          console.error('Error storing messages in MongoDB:', err);
        });
    }
  }, 5000);

process.on('SIGINT', () => {
  if (client) {
    client.close();
    console.log('MongoDB connection closed');
  }
});
