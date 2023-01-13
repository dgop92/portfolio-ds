import { Logger as PLogger } from "pino";
import { ILogger } from "./logger";

export class PinoLogger implements ILogger {
  constructor(private readonly logger: PLogger) {}

  fatal(message: string, meta: { [key: string]: any } = {}) {
    this.logger.fatal(meta, message);
  }

  error(message: string, meta: { [key: string]: any } = {}) {
    this.logger.error(meta, message);
  }

  warn(message: string, meta: { [key: string]: any } = {}) {
    this.logger.warn(meta, message);
  }

  info(message: string, meta: { [key: string]: any } = {}) {
    this.logger.info(meta, message);
  }

  http(message: string, meta: { [key: string]: any } = {}) {
    this.logger.info(meta, message);
  }

  debug(message: string, meta: { [key: string]: any } = {}) {
    this.logger.debug(meta, message);
  }
}
