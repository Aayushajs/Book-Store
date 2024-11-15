import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String },
  title: { type: String, required: true },
});

export default mongoose.model("Product", productSchema);
