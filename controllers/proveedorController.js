const Proveedor = require('../models/Proveedor');

// Función para agregar un Proveedor
exports.agregarProveedores = async (req, res) => {
    try {
        let proveedor = new Proveedor (req.body);
        await proveedor.save();
        res.json(proveedor);
    } catch (error) {
        console.error("Error al agregar Proveedor:", error.message);
        res.status(500).send('Hubo un error al agregar el Proveedor');
    }
};

// Función para mostrar todos los Proveedores
exports.mostarProveedores = async (req, res) => {
    try {
        const proveedores = await Proveedor.find();
        res.json(proveedores);
    } catch (error) {
        console.error("Error al mostrar los Proveedores:", error.message);
        res.status(500).send('Hubo un error al mostrar los Proveedores');
    }
};

// Función para buscar un Proveedor por ID
exports.buscarProveedores = async (req, res) => {
    try {
        let proveedor = await Proveedor.findById(req.params.id);
        if (!proveedor) {
            return res.status(404).send({ msg: "El Proveedor no se encuentra con ese ID" });
        }
        res.json(proveedor);
    } catch (error) {
        console.error("Error al buscar Proveedor:", error.message);
        res.status(500).send('Hubo un error al buscar el Proveedor');
    }
};

// Función modificar Proveedores con el metodo put

exports.modificarProveedores = async (req, res) =>{
    try {
     const proveedores =await Proveedor.findOneAndUpdate({_id: req.params.id}, req.body ,{new:true});
     if(!proveedores){
        res.status(404).send("Proveedor no encontrado");
    
    }else{
        res.json(clientes);
    }
       
    } catch (error) {
        console.error("Error al buscar Proveedor:", error.message);
        res.status(500).send('Hubo un error al buscar el Proveedor');
    }

}

// Función editar Proveedores con el metodo patch

exports.editarProveedores = async (req, res) =>{
    try {
     const proveedores =await Proveedor.findByIdAndUpdate(req.params.id , req.body, {new:true});
     if(!proveedores){
        return res.status(404).send("Proveedor no encontrado");
    
    }else{
        res.json(clientes);
    }
       
    } catch (error) {
        console.error("Error al buscar Proveedor:", error.message);
        res.status(500).send('Hubo un error al buscar el Proveedor');
    }

}

// Función eliminar Proveedores 
exports.eliminarProveedores = async (req, res) => {
    try {
        let proveedores =await Proveedor.findById({_id: req.params.id});
        if(!proveedores){
            res.status(404).send({ msg: "El Proveedor no existe" });
            return 
       
       }
       await Proveedor.findOneAndDelete({_id: req.params.id})
       res.json({msg:"el Proveedor fue eliminado con exito"})
          
       } catch (error) {
           console.error("Error al buscar Proveedor:", error.message);
           res.status(500).send('Hubo un error al buscar el Proveedor');
       }
   
}