import mysql from "mysql2/promise";

export default defineEventHandler(async (event) => {
    // const config = useRuntimeConfig(event);
    // console.log(process.env);
    // console.log(config);

    const connection = await mysql.createConnection({
        host: process.env.NUXT_SERVER_MYSQL_HOST,
        user: process.env.NUXT_SERVER_MYSQL_USER,
        password: process.env.NUXT_SERVER_MYSQL_PASSWORD,
        database: process.env.NUXT_SERVER_MYSQL_DATABASE,
    });

    const [rows] = await connection.execute("SELECT * FROM posts");
    return rows;
});
