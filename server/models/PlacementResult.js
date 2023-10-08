import mongoose from "mongoose";

const PlacementResultSchema = new mongoose.Schema(
  {
    student: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Student",
      required: [true, "Student ID is required "],
    },
    company: {
      type: String,
      required: [true, "Company is required"],
    },
    department: {
      type: String,
      enum: [
        "CSE",
        "IT",
        "MECH",
        "ECE",
        "EEE",
        "CIVIL",
        "AIDS",
        "AIML",
        "IOT",
        "CIC",
      ],
      required: [true, "Student dept is required !"],
    },
    year: {
      type: Number,
      required: [true, "Package is required "],
    },
    rollno: {
      type: String,
      required: [true, "Roll No is required !"],
    },
    position: {
      type: String,
      required: [true, "Job Position is required !"],
    },
    acceptanceStatus: {
      type: String,
      enum: ["Upload Pending", "Pending", "Accepted", "Rejected"],
      default: "Upload Pending",
    },
    offerLetterUrl: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("PlacementResult", PlacementResultSchema);
