import connectDB from "../../lib/mongodb";
import Activity from "../../models/activity";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
    const { 
    activityType,
    dateAuto,
    date,
    time,
    // stat1,
    // stat2,
    // stat3,
    // statData1,
    // statData2,
    // statData3
     } = await req.json();
  
    try {
      await connectDB();
      await Activity.create({ 
        activityType,
        dateAuto,
        date,
        time,
        // stat1,
        // stat2,
        // stat3,
        // statData1,
        // statData2,
        // statData3
       });
  
      return NextResponse.json({
        msg: ["Activity successfully added"],
        success: true,
      });
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        let errorList = [];
        for (let e in error.errors) {
          errorList.push(error.errors[e].message);
        }
        console.log(errorList);
        return NextResponse.json({ msg: errorList });
      } else {
        return NextResponse.json({ msg: ["Unable to send message."] });
      }
    }
  }