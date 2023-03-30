const appPath = require('app-root-path');
const getEnvironmentPath = require(`${appPath}/utils/environment`);
require('dotenv').config({ path: getEnvironmentPath() });
const { appLogger, serverLogger } = require( `${appPath}/utils/logger` );
const environment = process.env.CONTEXT;

['SIGINT', 'SIGTERM', 'SIGQUIT']
    .forEach(signal => process.on(signal, () => {
    appLogger.info(`${signal} signal received.`);
    gracefulShutdown();
    process.exit();
  }));