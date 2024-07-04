// This is for node testing with localhost, and may be removed if you want. || Do 'npm install express' || I use this for everything lmao
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Define the port

// Serve static files from the same directory
app.use(express.static(__dirname));

// Define routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
