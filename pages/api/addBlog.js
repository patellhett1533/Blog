import { connectMongo } from "@/lib/dbconnect";
import Blog from "@/model/Blog";
import nextConnect from "next-connect";
const multer = require("multer");
const shortid = require("shortid");
const path = require("path");

// upload prifle picture to folder using multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "blogImg"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const handler = nextConnect();

handler.use(upload.single("cover"));

handler.config = {
  api: {
    bodyParser: false,
  },
};

handler.post(async (req, res) => {
  await connectMongo(); // Establish MongoDB connection

  const { title, content } = req.body; // Retrieve text data from the request
  const { filename } = req.file; // Retrieve the uploaded file information

  // Create an instance of the Mongoose model
  const blog = new Blog({
    title,
    content,
    filename,
  });

  try {
    const savedBlog = await blog.save(); // Save the data to the database
    res.status(200).json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save blog" });
  }
});

export default handler;
