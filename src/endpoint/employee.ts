import express from 'express';
import EmployeeController from '../controllers/EmployeeController';

const router = express.Router();

router.get('/', EmployeeController.getAll)
.get('/:id', EmployeeController.getById)
.put('/:id', EmployeeController.update)
.delete('/:id', EmployeeController.delete)
.post('/employee', EmployeeController.create);

export default router;