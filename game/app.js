/**
 * Module dependencies.
 */
const express = require('express');
const logger = require('morgan');
const path = require('path');

/**
 * Route handlers.
 */
const routes = require('./routes/routes');


const app = express();

/**
 * Express configuration.
 * Some Middleware - log requests to the terminal console
 */
app.use(logger('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/', express.static(path.join(__dirname, 'public')));

/**
 * Primary app routes.
 */
app.get('/', routes.HOME);
app.get('/about', routes.ABOUT);
app.get('/game', routes.GAME);
app.get('/resources', routes.RESOURCES);
/**
 * Start Express server.
 */

app.listen(process.env.PORT || 3000, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3000);
});

module.exports = app;
