import {createLogger, transports, format} from 'winston';

export const logger = createLogger({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  transports: [new transports.Console(format.colorize())]
});

export class Logger {
  constructor() {}
}
