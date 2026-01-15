import mongoose from "mongoose";
import Category from "../models/Category.js";
import dotenv from "dotenv";

dotenv.config();

const categories = [
  { id: "food", name: "Food", type: "expense", color: "#EF4444", icon: "🍔" },
  { id: "travel", name: "Travel", type: "expense", color: "#3B82F6", icon: "✈️" },
  { id: "rent", name: "Rent", type: "expense", color: "#8B5CF6", icon: "🏠" },
  { id: "salary", name: "Salary", type: "income", color: "#22C55E", icon: "💰" },
  { id: "freelance", name: "Freelance", type: "income", color: "#14B8A6", icon: "🧑‍💻" },
];

await mongoose.connect(process.env.MONGO_URI);
await Category.insertMany(categories);
console.log("✅ Categories seeded");
process.exit();
