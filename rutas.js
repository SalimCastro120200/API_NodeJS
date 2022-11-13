const router = require( 'express' ).Router()
const conn = require( './config/conn' )

// Routes

// AREAS

// GET areas
router.get( '/area/', ( req, res ) => {
    let sql = 'SELECT * FROM area'
    conn.query( sql, ( err, rows, fields ) => {
        if ( err ) throw err;
        else{
            res.json( rows );
        }
    } )
} );

// GET 1 area
router.get( '/area/:id', ( req, res ) => {
    const { id } = req.params 
    let sql = 'SELECT * FROM area WHERE id_area = ?'
    conn.query( sql, [id], ( err, rows, fields ) => {
        if ( err ) throw err;
        else{
            res.json( rows );
        }
    } )
} );

// POST area
router.post('/area/',( req, res)=>{
    const{nombre, estado} = req.body
    let sql = `insert into area(nombre,estado) VALUES('${nombre}','${estado}')`
    conn.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Área Agregada'})
        }
    })
});

// DELETE area
router.delete( '/area/:id', ( req, res ) => {
    const { id } = req.params 
    let sql = `DELETE FROM area WHERE id_area = '${id}'`
    conn.query( sql, [id], ( err, rows, fields ) => {
        if ( err ) throw err;
        else{
            res.json( {status: 'Área Eliminada'} );
        }
    } )
} );

// UPDATE area
router.put('/area/:id',(req, res)=>{
    const{id}=req.params
    const{nombre, estado} = req.body

    let sql = `update area set 
                nombre ='${nombre}',
                estado='${estado}'
                where id_area = '${id}'`
    
    conn.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Área Modificada'})
        }
    })

})

// EMPLEADOS
// GET empleados
router.get( '/empleados/', ( req, res ) => {
    let sql = 'SELECT * FROM empleados'
    conn.query( sql, ( err, rows, fields ) => {
        if ( err ) throw err;
        else{
            res.json( rows );
        }
    } )
} );

// GET 1 empleado
router.get( '/empleados/:id', ( req, res ) => {
    const { id } = req.params 
    let sql = 'SELECT * FROM area WHERE id_area = ?'
    conn.query( sql, [id], ( err, rows, fields ) => {
        if ( err ) throw err;
        else{
            res.json( rows );
        }
    } )
} );

// POST empleados
router.post('/empleados/',( req, res)=>{
    const{nombres, a_paterno, a_materno, sexo, correo, telefono, fecha_nacimiento, dir_calle, dir_numero, dir_cp, dir_colonia} = req.body
    let sql = `insert into empleados(nombres,a_paterno,a_materno,sexo,correo,telefono,fecha_nacimiento,dir_calle,dir_numero,dir_cp,dir_colonia) VALUES('${nombres}','${a_paterno}','${a_materno}','${sexo}','${correo}','${telefono}','${fecha_nacimiento}','${dir_calle}','${dir_numero}','${dir_cp}','${dir_colonia}')`
    conn.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Empleado Agregado'})
        }
    })
});

// DELETE empleados
router.delete( '/empleados/:id', ( req, res ) => {
    const { id } = req.params 
    let sql = `DELETE FROM empleados WHERE id_empleados = '${id}'`
    conn.query( sql, [id], ( err, rows, fields ) => {
        if ( err ) throw err;
        else{
            res.json( {status: 'Empleado Eliminado'} );
        }
    } )
} );

// UPDATE empleados
router.put('/empleados/:id',(req, res)=>{
    const{id}=req.params
    const{nombres, a_paterno, a_materno, sexo, correo, telefono, fecha_nacimiento, dir_calle, dir_numero, dir_cp, dir_colonia} = req.body

    let sql = `update empleados set 
                nombres ='${nombres}',
                a_paterno ='${a_paterno}',
                a_materno ='${a_materno}',
                sexo ='${sexo}',
                correo ='${correo}',
                telefono ='${telefono}',
                fecha_nacimiento ='${fecha_nacimiento}',
                dir_calle ='${dir_calle}',
                dir_numero ='${dir_numero}',
                dir_cp ='${dir_cp}',
                dir_colonia ='${dir_colonia}'
                where id_empleados = '${id}'`

    
    conn.query(sql, (err, rows, fields)=>{
        if(err) throw err
        else{
            res.json({status: 'Empleado Modificado'})
        }
    })

})

module.exports = router;