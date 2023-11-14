import connectDB from "../../lib/mongodb";
import Activity from "../../models/activity";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function GET() {  
    try {
      await connectDB();
      const data = await Activity.find({});
      //console.log(data);

      if (!data) {
        return NextResponse.json({ msg: ["Unable to get data."] });
        } else {
        return NextResponse.json({
            msg: ["Data Retrieved Successfully!"],
            success: true,
            data
        });
    }  
    } catch (error) {
      if (error instanceof mongoose.Error.ValidationError) {
        let errorList = [];
        for (let e in error.errors) {
          errorList.push(error.errors[e].message);
        }
        console.log(errorList);
        return NextResponse.json({ msg: errorList });
      } else {
        return NextResponse.json({ msg: ["Unable to get request due to an error."] });
      }
    }
  }