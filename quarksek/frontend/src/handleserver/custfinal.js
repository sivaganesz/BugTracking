const WebSocket = require('ws');
const { MongoClient } = require('mongodb');

const url = 'mongodb://0.0.0.0:27017';
const dbName = 'bugtool';
const collectionName = 'customerfinal';

const wss = new WebSocket.Server({ port: 3001 });
let client;

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

      const selectedValue = typeof receivedMessage === 'object' ? receivedMessage.value : receivedMessage;

      console.log('Received message:', selectedValue);

      // Store each received message in the database immediately
      if (client) {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        collection.insertOne({ message: receivedMessage })
          .then(() => {
            console.log('Message stored in MongoDB:', receivedMessage);
          })
          .catch((err) => {
            console.error('Error storing message in MongoDB:', err);
          });
      }
      
      // Broadcast the message to all connected clients
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

process.on('SIGINT', () => {
  if (client) {
    client.close();
    console.log('MongoDB connection closed');
  }
});
