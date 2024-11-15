/*import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};
 */
import Product from "../model/Product.js";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Multer storage configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "books", // Cloudinary folder name
    allowed_formats: ["jpg", "jpeg", "png"],
  },
});
export const upload = multer({ storage });

// Controller: Create a new book
export const createBook = async (req, res) => {
  try {
    const { id, name, price, category, title } = req.body;
    const image = req.file ? req.file.path : ""; // Get Cloudinary image URL

    const product = new Product({
      id,
      name,
      price,
      category,
      image,
      title,
    });

    await product.save();
    res.status(201).json({ message: "Book created successfully", product });
  } catch (error) {
    console.error("Error creating book:", error);
    res.status(500).json({ message: "Failed to create book", error });
  }
};

// Controller: Get all books
export const getBook = async (req, res) => {
  try {
    const books = await Product.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch books", error });
  }
};
