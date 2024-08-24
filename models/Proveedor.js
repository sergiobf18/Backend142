const mongoose = require('mongoose');

// el modelo que hacemos

const proveedorSchema = mongoose.Schema({

    empresa:{
        type: String,
        required: true
    },

    nit:{
        type: String,
        required: true
    },

    productos:{
        type: [String],
        required: true
    },

    correo:{
        type: String,
        required: true
    },

    telefono:{
        type: Number,
        required: true
    },

    direccion:{
        type: String,
        required: true
    },
}, {versionkey:false})

module.exports = mongoose.model('Proveedor', proveedorSchema)