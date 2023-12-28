const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  rollNum: {
    type: Number,
    required: true,
  },
  activeStudent: {
    type: Boolean,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
