const express = require ('express');
const conectarDB = require('../configdb/db');
const cors = require('cors');
const port =  process.env.PORT || 5000;

const app = express();


// llamamos a nuestra función conectarDB
conectarDB();
app.use(cors());
app.use(express.json());

//rutas del proyecto
app.use('/api/clientes', require('../routers/ClientesRutas'))
app.use('/api/proveedores', require('../routers/ProveedoresRutas'))

// ruta desde la web
app.get('/', (req, res) => {
    res.send("Bienvenidos estamos desde el navegador");
})

app.listen(puerto,() => console.log("Estamos conectados desde el servidor", puerto));
