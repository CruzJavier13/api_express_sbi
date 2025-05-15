import express from 'express';
import SaleDetailController from '../controllers/SaleDetailController';

const router = express.Router();

router.get('/', SaleDetailController.getAll)
.get('/:id', SaleDetailController.getById)
.get('/detail/:detail', SaleDetailController.getDetail)
.put('/:id', SaleDetailController.update)
.delete('/:id', SaleDetailController.delete)
.post('/', SaleDetailController.create);

export default router;