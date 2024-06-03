const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// API routes
app.use('/auth', authRoutes);

// Catch-all route to serve index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
