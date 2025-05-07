import express from 'express';
import SaleController from '../controllers/SaleController';

const router = express.Router();

router.get('/', SaleController.getAll)
.get('/:id', SaleController.getById)
.put('/:id', SaleController.update)
.delete('/:id', SaleController.delete)
.post('/', SaleController.create);

export default router;