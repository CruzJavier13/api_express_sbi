import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();

router.get('/', ProductController.getAll)
.get('/:id', ProductController.getById)
.put('/:id', ProductController.update)
.delete('/:id', ProductController.delete)
.post('/product', ProductController.create);

export default router;