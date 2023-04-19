import { Router } from 'express';
import { insertUser } from '../controllers/UserController';

const router = Router();

router.get('/insert', insertUser);

export default router;