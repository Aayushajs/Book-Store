/*import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);

export default router;
*/
import express from "express"; 
import {createBook, getBook, upload } from "../controller/book.controller.js";

 

const router = express.Router();

// Route to create a new book
router.post("/add", upload.single("image"), createBook);

// Route to get all books
router.get("/", getBook);

export default router;
