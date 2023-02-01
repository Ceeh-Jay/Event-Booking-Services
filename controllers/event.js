import Event from "../models/Event";



//CREATE EVENT
export const createEvent = async (req, res, next) => {
    const newEvent = new Event(req.body);

    try {
        const savedEvent = await newEvent.save();
        res.status(200).json(savedEvent);
    } catch (err) {
        next(err);
    }
};



//UPDATE EVENT
export const updateEvent = async (req, res, next) => {
    try {
        const updatedEvent = await Event.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true}
        );
        res.status(200).json(updatedEvent)
    } catch (err) {
        next(err);
    }
};
 


//DELETE EVENT
export const deleteHotel = async (req, res, next) => {
    try {
        await Event.findByIdAndDelete(req.params.id);
        res.status(200).json("You have deleted event successfully");
    } catch (err) {
        next (err);
    }
};


//GET EVENT
export const getEvent = async (req, res, next) => {
    try {
        const event = await Event.findById(req.params.id);
        res.status(200).json(event);
    } catch (err) {
        next(err);
    }
};


//GET EVENTS
export const getCurrentEvents = async (req, res, next) => {
    try {
        // Get the current date
    const currentDate = new Date();
    // Find all events whose end date is greater than or equal to the current date
    const allCurrentEvents = await Event.find({ endDate: { $gte: currentDate } });

    //return all current event
    return allCurrentEvents;
    } catch {
        next (err);
    }
};

