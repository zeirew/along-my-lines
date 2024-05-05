import express from 'express';
const linesRoute = require('./routes/lines');

const app = express();

app.get('/lines', linesRoute);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
