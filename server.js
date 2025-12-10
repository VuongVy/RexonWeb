
const express = require('express');
const path = require('path');
const app = express();

// Serve all static files in project folder
app.use(express.static(path.join(__dirname)));

// Start server, listen on 0.0.0.0 for Docker
const PORT = process.env.PORT || 80;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://127.0.0.1:${PORT}`);
});
