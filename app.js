// import libraries
const express = require( "express" );
const cors = require( "cors" );
const contactRouter = require( "./app/routes/contact.route" );

const app = express();

app.use( cors() );
app.use( express.json() );


// rules
app.get( "/", ( req, res ) =>
{
    res.json( { message: "Welcome to contactBook the application!" } );
} )

app.use( "/api/contacts", contactRouter );

module.exports = app;