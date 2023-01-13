import pino from "pino";
import { APP_ENV_VARS } from "../config/app-env-vars";
import { AppLogger, ILogger } from "./logger";
import { PinoLogger } from "./pino-logger";

function createDevLogger(): ILogger {
  return new PinoLogger(
    pino({
      level: "debug",
      transport: {
        target: "pino-pretty",
      },
    })
  );
}

function createProductionLogger(): ILogger {
  return new PinoLogger(
    pino({
      level: "info",
    })
  );
}

let currentLogger: ILogger;

export function getAppLogger() {
  if (currentLogger === undefined) {
    if (APP_ENV_VARS.isDevelopment) {
      currentLogger = createDevLogger();
      AppLogger.getAppLogger().setLogger(currentLogger);
    } else if (APP_ENV_VARS.isProduction) {
      currentLogger = createProductionLogger();
      AppLogger.getAppLogger().setLogger(currentLogger);
    } else {
      // test environment
      currentLogger = createDevLogger();
      AppLogger.getAppLogger().setLogger(currentLogger);
    }
  }

  return AppLogger.getAppLogger();
}
