import mongoose from "mongoose";

// defining schema

const StudentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 60 },
  fee: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => v >= 5000.0,
  },
});

// creating model
const StudentModel = mongoose.model("student", StudentSchema);

export default StudentModel;
