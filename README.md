 ![GitHub repo size](https://img.shields.io/github/repo-size/codewithsadee/grilli)
  ![GitHub stars](https://img.shields.io/github/stars/codewithsadee/grilli?style=social)
  ![GitHub forks](https://img.shields.io/github/forks/codewithsadee/grilli?style=social)

  <br />
  
  ## BOOK STORE FRONTEND
  
  <br/>
  This is a bookstore web application built using the MERN stack (MongoDB, Express.js, Node.js). The project allows users to browse, upload, and manage books in an interactive, user-friendly interface. The application features an intuitive UI with responsive design, enabling a smooth experience across devices.

## Live Demo
  <a href="https://bookstores-app.netlify.app/"><strong>➥ Live Demo</strong></a>
<br/>

## File Structure

```python
  bookstore-backend/
├── config/                     
│   ├── db.js                  # MongoDB connection
│   ├── cloudinary.js          # Cloudinary setup
├── models/                    
│   ├── Book.js                # Book schema
│   └── User.js                # User schema
├── routes/                    
│   ├── books.js               # Book routes
│   └── users.js               # User routes
├── controllers/               
│   ├── bookController.js      # Book logic
│   └── userController.js      # User logic
├── .env                       # Environment variables
├── server.js                  # Main server file
├── package.json               # Project dependencies
└── README.md                  # Project documentation

```

## Description:

<br/>
1. config/: <br/>
db.js: Connects your app to MongoDB.<br/>
cloudinary.js: Configures Cloudinary for image uploads.<br/>

2. models/:<br/>
Book.js: Defines the schema for books.<br/>
User.js: Defines the schema for users.<br/>

3. routes/:<br/>
books.js: Contains API endpoints for managing books.<br/>
users.js: Contains API endpoints for user-related tasks.<br/>

4. controllers/:<br/>
bookController.js: Logic for adding, updating, and fetching books.<br/>
userController.js: Logic for user authentication and profile management.<br/>

5. server.js:<br/>
Main file to set up Express and load routes.<br/>

6. .env:<br/>
Store sensitive information like database URLs and API keys.<br/>

## Install

<br/>
➥npm install express mongoose dotenv cors cloudinary <br/>
 

## Command

<br />
CLONE :- git clone <URI>
<br/>
Insall :- npm i Package Name

<br/>
START :- npm run dev

## Web Logo

<br/>

![Logo](https://www.freeiconspng.com/thumbs/book-icon/book-icon-black-good-galleries--24.jpg)

## dependency 

```python
        {
  "name": "bookstore-backend",
  "version": "1.0.0",
  "description": "Backend for a bookstore app",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "dotenv": "^10.0.0",
    "mongoose": "^7.0.0",
    "cloudinary": "^1.30.0",
    "multer": "^1.4.5",
    "cors": "^2.8.5",
    "bcrypt": "^5.1.0",
    "jsonwebtoken": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```
 
## .evn

<br/>
PORT=5000<br/>
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/bookstore<br/>
CLOUDINARY_CLOUD_NAME=your-cloud-name<br/>
CLOUDINARY_API_KEY=your-api-key<br/>
CLOUDINARY_API_SECRET=your-api-secret<br/>
