const express = require('express')

const { PORT } = require('./CONSTANTS')


const app = express()

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => console.log('Server is working...'))