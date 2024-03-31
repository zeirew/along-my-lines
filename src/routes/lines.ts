import express from 'express';
import {getORM} from '../database/connection';
import {Line} from '../entities/line';

const router = express.Router();

router.get('/lines', async (req, res) => {
  let lines: any[] = [];
  try {
    const orm = await getORM();
    const em = await orm.em.fork();
    lines = await em.find(Line, {});
  } catch (error) {
    console.error(error);
    res.status(500).send('Error collecting subway line information');
  } finally {
    res.send(lines);
  }
});

module.exports = router;
