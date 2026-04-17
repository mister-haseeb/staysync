const express = require("express");
const router = express.Router();

const eventController = require("../controllers/eventController");
const protect = require("../middlewares/auth");

// PUBLIC
router.get("/", eventController.getEvents);

// ⭐ IMPORTANT: THESE MUST BE ABOVE /:id
router.get("/my-events", protect, eventController.getMyEvents);
router.get("/my-rsvps", protect, eventController.getMyRSVPs);

// SINGLE EVENT (MUST BE LAST PUBLIC GET)
router.get("/:id", eventController.getEvent);

// PROTECTED
router.post("/", protect, eventController.createEvent);
router.put("/:id", protect, eventController.updateEvent);
router.delete("/:id", protect, eventController.deleteEvent);

// RSVP
router.post("/:id/rsvp", protect, eventController.toggleRSVP);

module.exports = router;