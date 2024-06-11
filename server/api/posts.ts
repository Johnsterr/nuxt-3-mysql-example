import mysql from "mysql2/promise";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event);
  //console.log(config);

  const connection = await mysql.createConnection({
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
  });

  const [rows] = await connection.execute("SELECT * FROM posts");
  return rows;
});
