// this is needed for importing expressjs into our application
const express = require('express');
const http = require('http');
const appConfig = require('./config/appConfig');
const fs = require('fs');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const globalErrorMiddleware = require('./middlewares/appErrorHandler');
const routeLoggerMiddleware = require('./middlewares/routeLogger');
const helmet = require('helmet');
const logger = require('./libs/loggerLib');


//declaring an instance or creating an application instance
const app = express();

// application level middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(globalErrorMiddleware.globalErrorHandler);
app.use(routeLoggerMiddleware.logIp);
app.use(helmet());




// Bootstrap models
let modelsPath = './models';
fs.readdirSync(modelsPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        require(modelsPath + '/' + file);
    }
});
// end Bootstrap models



// Bootstrap route
let routesPath = './routes';
fs.readdirSync(routesPath).forEach(function (file) {
    if (~file.indexOf('.js')) {
        console.log("including the following file");
        console.log(routesPath + '/' + file);
        let route = require(routesPath + '/' + file);
        route.setRouter(app);
    }
});
// end bootstrap route


// calling global 404 handler after route

app.use(globalErrorMiddleware.globalNotFoundHandler);

// end global 404 handler

/**
 * Create HTTP server.
 */

const server = http.createServer(app);
// start listening to http server
// console.log(appConfig);
server.listen(appConfig.port);
server.on('error', onError);
server.on('listening', onListening);

// end server listening code

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
    if (error.syscall !== 'listen') {
        logger.error(error.code + ' not equal listen', 'serverOnErrorHandler') ;
        throw error ;
    }

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(error.code + ':elavated privileges required', 'serverOnErrorHandler') ;
            process.exit(1) ;
            break ;
        case 'EADDRINUSE':
            logger.error(error.code + ':port is already in use.', 'serverOnErrorHandler') ;
            process.exit(1) ;
            break ;
        default:
            logger.error(error.code + ':some unknown error occured', 'serverOnErrorHandler') ;
            throw error ;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = server.address() ;
    var bind = typeof addr === 'string'  ? 'pipe ' + addr  : 'port ' + addr.port ;
    // console.log('Listening on ' + bind) ;
    logger.info('server listening on port: ' + addr.port, 'serverOnListeningHandler') ;
    let db = mongoose.connect(appConfig.db.uri, { useMongoClient: true }) ;
}

process.on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Rejection at: Promise', p, 'reason:', reason) ;
    // application specific logging, throwing an error, or other logic here
}) ;



// handling mongoose connection error
mongoose.connection.on('error', function (err) {
    logger.error('database connection error','Database connection');

}); // end mongoose connection error

// handling mongoose success event
mongoose.connection.on('open', function (err) {
    if (err) {
        logger.error('database open error','Database open');

    } else {
        logger.info('database connection open success','Database open');
    }

}); // end mongoose connection open handler

