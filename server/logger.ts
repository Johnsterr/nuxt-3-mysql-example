import {createLogger, format, transports} from "winston";
import {join} from "path";
import {fileURLToPath} from "node:url";

const dirname = fileURLToPath(new URL("./logs", import.meta.url));

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({
      format: "YYYY-MM-DD HH:mm:ss",
    }),
    format.errors({stack: true}),
    format.splat(),
    format.json()
  ),
  defaultMeta: {service: "user-service"},
  transports: [
    new transports.File({
      filename: join(dirname, "error.log"),
      level: "error",
    }),
    new transports.File({filename: join(dirname, "combined.log")}),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    })
  );
}

export default logger;
