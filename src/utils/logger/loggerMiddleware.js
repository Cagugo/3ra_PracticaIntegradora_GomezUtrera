const { devLogger, stageLogger, prodLogger } = require('./logger');
const { args } = require('../../config/index');

function loggerMiddleware(req, res, next) {
  if (args.mode === 'production') {
    req.logger = prodLogger;
    req.logger.debug('prodLogger running');
  } else if (args.mode === 'staging') {
    req.logger = stageLogger;
    req.logger.debug('stageLogger running');
  } else {
    req.logger = devLogger;
    req.logger.debug('devLogger running');
  }
  next();
}
module.exports = loggerMiddleware;
