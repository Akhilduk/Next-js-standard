import pino from 'pino';

export const logger = pino({
  level: process.env.NODE_ENV === 'production' ? 'info' : 'debug',
  transport: process.env.NODE_ENV === 'production' ? undefined : { target: 'pino-pretty' }
});

export const withCorrelation = (correlationId: string) => logger.child({ correlationId });
