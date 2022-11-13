require('./config/conn');

const express = require( 'express' );
const port = ( process.env.port || 3000 );

// Express
const app = express();

// Admit JSON
app.use( express.json() )
app.use(express.urlencoded({ extended: true }));

// Config
app.set( 'port', port );

// Routes
app.use( '/api', require( './rutas' ) )

// Express Init
app.listen( app.get( 'port' ), (error) => {
    if ( error ) {
        console.log( 'Error al Iniciar el Servidor '+ error )
    } else {
        console.log( 'Servidor Iniciado en el Puerto ' + port )
    }
} )