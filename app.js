const express = require('express');
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextpassword = 'sO/\/\P4$$wOrD';
const someOtherPlaintextpassword = 'not_bacon';

const placesRoutes = require('./routes/routes');

const app = express();
const port = process.env.port || 3001;

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/places', placesRoutes);

app.get('/', (req, res) => {
  res.send('Hello Welcome To Group JAS Project!');
});

app.use('*', (req, res) => {
  res.status(400).json({
    message: 'Endpoint not found!',
  });
});

app.listen(port, () => console.log(`Running on port ${port}`))
