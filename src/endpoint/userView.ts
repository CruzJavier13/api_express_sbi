import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.get('/', UserController.getAll)
.get('/:id', UserController.getById)
.put('/:id', UserController.update)
.delete('/:id', UserController.delete)
.post('/product', UserController.create);

export default router;