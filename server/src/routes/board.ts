import { Router } from 'express';
import { all, one } from '../controllers/BoardController';

const router = Router();

router.get('/', all);

router.get('/:boardId', one);

export default router;