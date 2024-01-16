const express = require('express')
const cors = require('cors')
const { PORT, AuthEndpoints } = require('./CONSTANTS')
AuthEndpoints

const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post(AuthEndpoints.REGISTER, (req, res) => {
    res.status(200).json({ status: 'successfully' });
});
app.listen(PORT, () => console.log('Server is working...'))