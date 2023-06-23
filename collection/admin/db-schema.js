const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema(
  {
    email:{
      type : String,
      required : [true,"Please enter a email address"]
    },
    website: {
      type: String,
      required: [true,"Please enter a Web Name"],
    },
    city: {
      type: String,
      required: [true,"Please enter a city"],
    },
    number: {
      type: Number,
      required: [true,"Please enter a Mobile Number"]
    },
    experience: {
      type: String,
      required: [true,"Please enter your experience"]
    },
    degree: {
      type: String,
      required: [true,"Please enter Degree Name"]
    },
    DOB: {
      type: Date,
      required: [true, "Please enter your DOB"]
    },
    age: {
      type: Number,
      required: [true, "Please enter your Age"]
    },
    freelancer: {
      type: Boolean,
      required: true
    },
    textarea: {
      type: String,
      required: [true,"Please fill the textarea"]
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("adminDetails", adminSchema);
