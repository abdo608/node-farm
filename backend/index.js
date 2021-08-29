require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors')
const data = require('./dev-data/data.json');
const port = process.env.PORT || 8080;
const url = require('url');
app.use(cors());

app.get('/products', (req, res) => {
    const id = url.parse(req.url).query;

    if (id) {
        res.send(data[id.replace('id=', '')])
    } else {
        res.send(data)
    }
});

app.get('/products', (req, res) => {
    res.send(data)
});

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})