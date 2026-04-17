const Event = require("../models/Event");
const eventService = require("../services/eventService");

// CREATE
exports.createEvent = async (req, res) => {
  const event = await eventService.createEvent(req.body, req.user._id);
  res.json(event);
};

// GET ALL
exports.getEvents = async (req, res) => {
  const events = await eventService.getEvents({});
  res.json(events);
};

// GET ONE
exports.getEvent = async (req, res) => {
  const event = await eventService.getEvent(req.params.id);
  res.json(event);
};

// UPDATE
exports.updateEvent = async (req, res) => {
  const event = await eventService.updateEvent(req.params.id, req.body);
  res.json(event);
};

// DELETE
exports.deleteEvent = async (req, res) => {
  await eventService.deleteEvent(req.params.id);
  res.json({ message: "Event deleted" });
};


/* ⭐ FIXED RSVP TOGGLE */
exports.toggleRSVP = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    const userId = req.user._id.toString();

    const alreadyRSVP = event.rsvps
      .map(id => id.toString())
      .includes(userId);

    if (alreadyRSVP) {
      event.rsvps = event.rsvps.filter(
        id => id.toString() !== userId
      );
    } else {
      event.rsvps.push(userId);
    }

    await event.save();

    res.json({
      message: alreadyRSVP ? "RSVP removed" : "RSVP added",
      event
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

/* ⭐ FIXED MY RSVP LIST (THIS WAS MISSING → CAUSING 500) */
exports.getMyRSVPs = async (req, res) => {
  try {

    if (!req.user || !req.user._id) {
      return res.status(401).json({ message: "User not found in request" });
    }

    const events = await Event.find({
      rsvps: req.user._id
    }).populate("organizer", "name email");

    res.json(events);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

exports.getMyEvents = async (req, res) => {
  try {

    const events = await Event.find({
      organizer: req.user._id
    });

    res.json(events);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};