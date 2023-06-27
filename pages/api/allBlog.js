import { connectMongo } from "@/lib/dbconnect";
import Blog from "@/model/Blog";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.status(400).json({ message: "Only get request is acceptable" });
  } else {
    await connectMongo();
    Blog.find()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(400).json({ err });
      });
  }
}
