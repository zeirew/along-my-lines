import express from 'express';

import stationsRouter from './routes/stations';

const app = express();

app.get('/stations', stationsRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
