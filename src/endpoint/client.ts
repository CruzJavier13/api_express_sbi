import express from 'express';
import ClientController from '../controllers/ClientController';

const router = express.Router();

router.get('/', ClientController.getAll)
.get('/:id', ClientController.getById)
.put('/:id', ClientController.update)
.delete('/:id', ClientController.delete)
.post('/client', ClientController.create);

export default router;