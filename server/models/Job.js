import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Job = new Schema(
  {
    title: { type: String, required: true },
    company: { type: String, required: true },
    hours: { type: Number, required: true },
    wage: { type: Number, required: true, default: 1 },
    description: { type: String, }
  },

  { timestamps: true, toJSON: { virtuals: true } }
);

export default Job;