const express = require('express')
const cors = require('cors')
const { PORT, AuthEndpoints } = require('./CONSTANTS')
const { default: mongoose } = require('mongoose')
const connectToDb = require('./DB/connectionDb')

const app = express()

app.use(express.json())
app.use(cors())

connectToDb()///

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post(AuthEndpoints.REGISTER, (req, res) => {
    res.status(200).json({ status: 'successfully' });
});
app.listen(PORT, () => console.log('Server is working...'))