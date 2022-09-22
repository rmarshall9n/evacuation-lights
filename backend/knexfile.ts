import type { Knex } from "knex";
import dotenv from 'dotenv';

dotenv.config()

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql',
    connection: {
      host : process.env.MYSQL_HOST,
      user : process.env.MYSQL_USER,
      password : process.env.MYSQL_PASSWORD,
      database : process.env.MYSQL_DB_NAME,
      port: 3306
    }
  }
};

export default config
