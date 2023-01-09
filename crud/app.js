import express from "express";
import multer from "multer";
const app = express();
import path from "path";
import connectDB from "./db/connectdb.js";
import router from "./routes/web.js";

const port = process.env.PORT || "3000";
const DATABASE_URI = process.env.DATABASE_URI || "mongodb://127.0.0.1";

const storage = multer.diskStorage({
  destination: "public/images",
  filename: (req, cb, file) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });
// accessing public folder
app.use(express.static(path.join(process.cwd(), "public")));

app.use(express.urlencoded({ extended: false }));

// app.use(express.static(join(__dirname, "public")));
// setting view engine
app.set("view engine", "ejs");
app.use(upload.single("image"), router);

connectDB(DATABASE_URI);

app.listen(port, () => {
  console.log(`runnit at port ${port}`);
});
