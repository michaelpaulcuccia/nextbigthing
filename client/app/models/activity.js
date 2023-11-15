import mongoose, { Schema } from "mongoose";

const activitySchema = new Schema({
  activityType: {
    type: String,
    required: [true, "Activity is required."],
    enum: ["Hiking", "Walking", "Breathwork"],
  },
  //this item will automatically populate without user input.
  dateAuto: {
    type: Date,
    default: Date.now,
  },
  date: {
    type: String,
    required: [true, "date is required."],
  },
  time: {
    type: String,
    required: [true, "time is required."],
  },
  stat1Title: {
    type: String,
    required: [true, "stat1Title is required."],
    enum: ["distance", "rounds"],
  },
  stat1: {
    type: String,
    required: [true, "stat1 is required."],
  },
  stat2Title: {
    type: String,
    required: [true, " stat2Title is required."],
    enum: ["time", "average retention"],
  },
  stat2: {
    type: String,
    required: [true, "stat2 is required."],
  },
  stat3Title: {
    type: String,
    required: [true, " stat3Title is required."],
    enum: ["speed", "max retention"],
  },
  stat3: {
    type: String,
    required: [true, "stat3 is required."],
  },
});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;