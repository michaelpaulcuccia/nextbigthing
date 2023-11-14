import mongoose, { Schema } from "mongoose";

const activitySchema = new Schema({
  activityType: {
    type: String,
    required: [true, "Activity is required."],
    minLength: [2, "Name must be larger than 2 characters"],
    maxLength: [50, "Name must be lesser than 50 characters"],
  },

//   email: {
//     type: String,
//     required: [true, "Email is required."],
//     match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
//   },

  // date: {
  //   type: Date,
  //   default: Date.now,
  // },
  date: {
    type: String,
    required: [true, "date is required."],
  },
  time: {
    type: String,
    required: [true, "time is required."],
  },
  // stat1: {
  //   type: String,
  //   required: [true, "stat1 is required."],
  // },
  // stat2: {
  //   type: String,
  //   required: [true, "stat2 is required."],
  // },
  // stat3: {
  //   type: String,
  //   required: [true, "stat3 is required."],
  // },
  // statData1: {
  //   type: String,
  //   required: [true, "statData1 is required."],
  // },
  //  statData2: {
  //   type: String,
  //   required: [true, " statData2 is required."],
  // },
  //  statData3: {
  //   type: String,
  //   required: [true, " statData3 is required."],
  // }

});

const Activity =
  mongoose.models.Activity || mongoose.model("Activity", activitySchema);

export default Activity;