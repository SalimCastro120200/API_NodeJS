const mysql = require( 'mysql' )
const conn = mysql.createConnection( {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3307,
    database: 'innovattia'
});

conn.connect( ( err ) => {
    if( err ){
        console.log( 'Ha ocurrido un error ' + err )
    } else {
        console.log( 'Conexión éxitosa con Base de Datos' )
    }
} );

module.exports = conn;