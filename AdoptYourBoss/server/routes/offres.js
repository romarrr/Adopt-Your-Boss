import express from 'express';
import { getOffres, getOffre, createOffres, getOffresRecentDate, updateOffres, deleteOffre } from '../controllers/offresControllers.js';

const router = express.Router();

router.get('/', getOffres);
router.get('/:id', getOffre);
router.get('/recentDate', getOffresRecentDate)
router.get('/delete/:id', deleteOffre)
router.post('/', createOffres);
router.post('/update/:id', updateOffres);


export default router;