const Cliente = require('../models/Cliente');

// Función para agregar cliente
exports.agregarClientes = async (req, res) => {
    try {
        let cliente = new Cliente(req.body);
        await cliente.save();
        res.json(cliente);
    } catch (error) {
        console.error("Error al agregar cliente:", error.message);
        res.status(500).send('Hubo un error al agregar el cliente');
    }
};

// Función para mostrar todos los clientes
exports.mostarClientes = async (req, res) => {
    try {
        const clientes = await Cliente.find();
        res.json(clientes);
    } catch (error) {
        console.error("Error al mostrar los clientes:", error.message);
        res.status(500).send('Hubo un error al mostrar los clientes');
    }
};

// Función para buscar un cliente por ID
exports.buscarClientes = async (req, res) => {
    try {
        let cliente = await Cliente.findById(req.params.id);
        if (!cliente) {
            return res.status(404).send({ msg: "El cliente no se encuentra con ese ID" });
        }
        res.json(cliente);
    } catch (error) {
        console.error("Error al buscar cliente:", error.message);
        res.status(500).send('Hubo un error al buscar el cliente');
    }
};

// Función modificar cliente con el metodo put

exports.modificarClientes = async (req, res) =>{
    try {
     const clientes =await Cliente.findOneAndUpdate({_id: req.params.id}, req.body ,{new:true});
     if(!clientes){
        res.status(404).send("Cliente no encontrado");
    
    }else{
        res.json(clientes);
    }
       
    } catch (error) {
        console.error("Error al buscar cliente:", error.message);
        res.status(500).send('Hubo un error al buscar el cliente');
    }

}

// Función editar cliente con el metodo patch

exports.editarClientes = async (req, res) =>{
    try {
     const clientes =await Cliente.findByIdAndUpdate(req.params.id , req.body, {new:true});
     if(!clientes){
        return res.status(404).send("Cliente no encontrado");
    
    }else{
        res.json(clientes);
    }
       
    } catch (error) {
        console.error("Error al buscar cliente:", error.message);
        res.status(500).send('Hubo un error al buscar el cliente');
    }

}

exports.eliminarClientes = async (req, res) => {
    try {
        let clientes =await Cliente.findById({_id: req.params.id});
        if(!clientes){
            res.status(404).send({ msg: "El cliente no existe" });
            return 
       
       }
       await Cliente.findOneAndDelete({_id: req.params.id})
       res.json({msg:"el cliente fue eliminado con exito"})
          
       } catch (error) {
           console.error("Error al buscar cliente:", error.message);
           res.status(500).send('Hubo un error al buscar el cliente');
       }
   
}