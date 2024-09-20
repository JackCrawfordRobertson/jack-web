const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory (adjust the path if needed)
app.use(express.static(path.join(__dirname, 'public')));

// For any other routes, serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server on port 3000, accessible from any network interface
app.listen(3000, '192.168.1.48', () => {
  console.log('Server is running at http://192.168.1.48:3000/');
});