//To create a Node server in your server.js file
//To run server : nodemon server 
//To create an express app : npm install --save express

console.log('im here');

const app = require('./app');
const http = require('http');
var debug = require('debug')('expressapp:server');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);




/**
 * Normalize a port into a number, string, or false.
 */

 function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }


/**
 * Create HTTP server.
 */

 var server = http.createServer(app);

 /**
  * Listen on provided port, on all network interfaces.
  */
 
 server.listen(port, ()=>{
    console.log('listening on :3000');
 });
 server.on('error', onError);
 server.on('listening', onListening);

/**
 * Event listener for HTTP server "error" event.
 */

 function onError(error) {
    if (error.syscall !== 'listen') {
      throw error;
    }
  
    var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;
  
    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  }
  
  /**
   * Event listener for HTTP server "listening" event.
   */
  
  function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    debug('Listening on ' + bind);
  }
  

  console.log(process.env.EMAIL)