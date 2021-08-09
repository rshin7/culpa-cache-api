const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

const port = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routes = require('./routes/routes.js')(app, fs);

const server = app.listen(port, () => {
    console.log('API Server Online on port %s', server.address().port)
});