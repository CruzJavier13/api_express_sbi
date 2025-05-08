import express from 'express';
import CategoryProductController from '../controllers/CategoryProductController';

const router = express.Router();

router.get('/', CategoryProductController.getAll)
.get('/:id', CategoryProductController.getById)
.put('/:id', CategoryProductController.update)
.delete('/:id', CategoryProductController.delete)
.post('/', CategoryProductController.create);

export default router;