import express from "express";

import {
  createEvent,
  updateEvent,
  updateEvent,
  deleteEvent,
  getEvent,
  getCurrentEvents,
} from "../controllers/event.js";

const router = express.Router();

//CREATE
router.post("/", createEvent);
//UPDATE
router.put("/:id", updateEvent);

//DELETE
router.delete("/:id", deleteEvent);
//GET ONE
router.get("/:id", getEvent);

//GET ALL
router.get("/", getCurrentEvents);



export default router;