import Events from '../models/eventsModels.js';
import mongoose from 'mongoose';

export var getEvents = async (req, res) => {
    try {

        const events = await Events.find();
        res.status(200).json(events);
        
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export var getEventsRecent = async (req, res) => {
    try {

        const events = await Events.find().sort({dates: 1});
        res.status(200).json(events);
        
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

export const getEvent = async (req, res) => { 
    const { id } = req.params;

    try {
        const event = await Events.findById(id);
        
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


export const createEvents = async (req, res) => {
    const body = req.body;
    const newEvent = new Events(body);

    try {

        await newEvent.save();

        res.status(201).json(newEvent);
        
    } catch (error) {

        res.status(404).json({ message: error.message});
        
    }
}

export const deleteEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Events.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const updateEvents = async (req, res) => {

    await Events.findByIdAndUpdate(req.params.id, {titleEvent: req.body.titleEvent, description: req.body.descriptionEvent, image: req.body.imageEvent, dates: req.body.datesEvent, lieu: req.body.lieuEvent});

    res.status(201).json(req.params.id+' : update');

    console.log(req.params.id+' : update')

    res.json(updateEvents);
}