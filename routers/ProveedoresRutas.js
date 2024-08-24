const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController')

router.post('/', proveedorController.agregarProveedores);
router.get('/', proveedorController.mostarProveedores);
router.get('/:id', proveedorController.buscarProveedores);
/*router.put('/:id', proveedorController.modificarClientes);*/
router.patch('/:id', proveedorController.editarProveedores);
router.delete('/:id', proveedorController.eliminarProveedores);


module.exports = router;