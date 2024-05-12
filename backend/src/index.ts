import express from 'express';

const stationsRoute = require('./routes/stations');

const app = express();

app.get('/stations', stationsRoute);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});