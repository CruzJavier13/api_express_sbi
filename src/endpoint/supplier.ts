import expres from 'express';
import SupplierController from '../controllers/SupplierController';
const router = expres.Router();

router.get('/', SupplierController.getAll)
.get('/:id', SupplierController.getById)
.post('/', SupplierController.create)
.delete('/:id', SupplierController.delete)
.put('/:id', SupplierController.update);

export default router;