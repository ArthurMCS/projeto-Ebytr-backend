require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

app.use(express.json());

app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use('/', routes)

app.listen(port, () => console.log('listening on port ' + port));