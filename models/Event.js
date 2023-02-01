import mongoose from "mongoose";

const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["Physical", "Virtual"],
    required: true,
  },
  ticketPrice: {
    type: Number,
    required: true,
  },
  collaborators: [
    {
      type: String,
    },
  ],
  organizers: [
    {
      type: String,
    },
  ],
  images: [
    {
      type: String,
    },
  ],
  featuredImage: {
    type: String,
    required: true,
  },
});

export default mongoose.model(Event, EventSchema);
