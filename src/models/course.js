const { Schema, model } = require("mongoose");
const schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
    },
  },
  { timestamps: true }
);

const course = model("course", schema);
module.exports = course;
