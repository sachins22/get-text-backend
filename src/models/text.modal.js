import mongoose from "mongoose";

const TextSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const TextModel = mongoose.model('TextModel', TextSchema);

export default TextModel;
