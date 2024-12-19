// Create web server
// Create a new express server
const express = require('express');
const app = express();
// Create a new database
const Datastore = require('nedb');
const db = new Datastore({ filename: 'database.db', autoload: true });
// Serve static files
app.use(express.static('public'));
// Enable JSON
app.use(express.json({ limit: '1mb' }));
// Start the server
app.listen(3000, () => {
  console.log('listening at 3000');
});