import express from 'express';
import { getEvents, getEvent, createEvents, deleteEvent, updateEvents, getEventsRecent } from '../controllers/eventsControllers.js';

const router = express.Router();

router.get('/', getEvents);
router.get('/recentDate', getEventsRecent)
router.post('/', createEvents);
router.get('/:id', getEvent);
router.get('/delete/:id', deleteEvent);
router.post('/update/:id', updateEvents);

export default router;