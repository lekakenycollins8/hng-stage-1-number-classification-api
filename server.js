const express = require('express');
const cors = require('cors');
const axios = require('axios');
const classifyNumberRoute = require('./routes/api');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/', classifyNumberRoute);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
