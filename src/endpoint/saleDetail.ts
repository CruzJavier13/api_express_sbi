import express from 'express';
import SaleDetailController from '../controllers/SaleDetailController';

const router = express.Router();

router.get('/', SaleDetailController.getAll)
.get('/:id', SaleDetailController.getById)
.put('/:id', SaleDetailController.update)
.delete('/:id', SaleDetailController.delete)
.post('/product', SaleDetailController.create);

export default router;