function gracefulShutdown({ process, app, httpServer, httpsServer, appLogger }) {
    appLogger.info('Shutting down...');
    process.exit();
};

module.exports = gracefulShutdown;