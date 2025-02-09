// ----------------------------------------------------------
// IMPORT LIRARY
// ----------------------------------------------------------
import winston from 'winston';
import 'winston-daily-rotate-file';

// ----------------------------------------------------------
// LEVEL LOG
// ----------------------------------------------------------
const logLevel = 'silly';

// ----------------------------------------------------------
// TRANSPORT CONFIG
// ----------------------------------------------------------
const fileTransport = new winston.transports.DailyRotateFile({
    filename: './logs/app-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '1m',
    maxFiles: '14d',
    level: 'error',
    handleExceptions: true
});

// ----------------------------------------------------------
// FORMAT LOG
// ----------------------------------------------------------
const logFormat = winston.format.combine(
    winston.format.json({ space: 2 }),
    winston.format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss.SSS A' }),
    winston.format.label({ label: '[LOGGER]' }),
    winston.format.printf((info) => `${info.label} ${info.timestamp} ${info.level} : ${info.message}`)
);

// ----------------------------------------------------------
// INIT LOGGER
// ----------------------------------------------------------
const logger = winston.createLogger({
    level: logLevel,
    format: logFormat,
    transports: [
        new winston.transports.Console({
            level: logLevel,
            handleExceptions: true,
            format: winston.format.combine(
                winston.format.colorize({ all: true })
            )
        }),
        fileTransport
    ]
});

// ----------------------------------------------------------
// EXPORT
// ----------------------------------------------------------
export default logger;