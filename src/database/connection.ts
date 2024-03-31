import {PostgreSqlDriver} from '@mikro-orm/postgresql';
import {Line} from '../entities/line';
import {MikroORM} from '@mikro-orm/core';
import * as dotenv from 'dotenv';

dotenv.config();

export async function getORM() {
  const orm = await MikroORM.init({
    entities: [Line],
    dbName: 'postgres',
    host: 'localhost',
    port: 5433,
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    driver: PostgreSqlDriver,
  });
  return orm;
}
