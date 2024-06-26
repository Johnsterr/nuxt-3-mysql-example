import {Sequelize} from "sequelize";

export const MYSQL_CONFIG = {
  host: process.env.NUXT_SERVER_MYSQL_HOST,
  user: process.env.NUXT_SERVER_MYSQL_USER,
  password: process.env.NUXT_SERVER_MYSQL_PASSWORD,
  database: process.env.NUXT_SERVER_MYSQL_DATABASE,
};

const sequelize = new Sequelize(
  MYSQL_CONFIG.database as string,
  MYSQL_CONFIG.user as string,
  MYSQL_CONFIG.password as string,
  {
    host: MYSQL_CONFIG.host,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

export default sequelize;
