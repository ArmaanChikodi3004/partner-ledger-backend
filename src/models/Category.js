import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: String,
  type: { type: String, enum: ["income", "expense"] },
  color: String,
  icon: String,
});

export default mongoose.model("Category", categorySchema);
