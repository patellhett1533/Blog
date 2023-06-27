import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    cover: {
      type: String,
      required: true,
    },
    content: [
      {
        option: String,
        data: mongoose.Schema.Types.Mixed,
      },
    ],
  },
  { timestamps: true }
);

mongoose.models = {};

export default mongoose.model("Blog", blogSchema);
