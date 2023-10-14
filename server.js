// import libraries
const app = require( './app' );
const config = require( './app/config' );


// start server
const port = config.app.port;

app.listen( port, () =>
{
    console.log( `Server running on port ${ port }` );
} );