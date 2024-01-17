const express = require('express')
const cors = require('cors')
const { PORT, AuthEndpoints } = require('./CONSTANTS')
const { default: mongoose } = require('mongoose')
const connectToDb = require('./DB/connectionDb')
const userService = require('./DB/service/userService')

const app = express()

app.use(express.json())
app.use(cors())

connectToDb()///

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post(AuthEndpoints.LOGIN, (req, res) => {
    return res.status(200).json({ token: req.body });
});

app.post(AuthEndpoints.REGISTER, async (req, res) => {
    try {
        await userService.register(req.body)
        res.status(200).json({ status: 'successfully' });
    } catch (err) {
        res.status(404).json({ status: 'email already exist' });
    }
});
app.listen(PORT, () => console.log('Server is working...'))