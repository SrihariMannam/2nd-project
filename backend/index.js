const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('hi');
    });

app.listen(PORT, () => {
    console.log(`Backend server is running on http://localhost:${PORT}`);
});