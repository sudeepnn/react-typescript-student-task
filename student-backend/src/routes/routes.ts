import { Router } from 'express';
import { createStudent, getStudents, getStudent, updateStudent, deleteStudent } from '../controller/student_Controller';

const router = Router();

router.post('/students', createStudent);
router.get('/students', getStudents);
router.get('/students/:id', getStudent);
router.put('/students/:id', updateStudent);
router.delete('/students/:id', deleteStudent);

export default router;