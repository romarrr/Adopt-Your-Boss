import express from 'express';
import { getNews, getNew, createNews, deleteNew, updateNews, getNewsRecentNews } from '../controllers/newsControllers.js';

const router = express.Router();

router.get('/', getNews);
router.get('/recentDate', getNewsRecentNews);
router.post('/', createNews);
router.get('/:id', getNew);
router.get('/delete/:id', deleteNew);
router.post('/update/:id', updateNews);

export default router;