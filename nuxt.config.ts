import {MYSQL_CONFIG} from "./config/db/mysql";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  runtimeConfig: {
    mysql: MYSQL_CONFIG,
  },
});
