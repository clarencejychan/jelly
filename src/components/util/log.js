import { createLogger, format, transports } from 'winston'

// Import Logger
const log = createLogger({
    level: 'info',
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.errors({ stack: true }),
      format.splat(),
      format.json()
    ),
    prettyPrint: true,
    transports: [
      new transports.File({ filename: 'rockets.log' })
    ]
});

export default log;