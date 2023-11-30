import express from "express";
import cors from "cors";
import multer from "multer";
import path from "path";
import fs from "fs";

const app = express();
const port = 8000;

app.use(cors());

app.get("/", (_, res) => {
  res.send("Hello World");
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage: storage });

app.post("/upload", upload.single("file"), (req: any, res: any) => {
  fs.readFile(req.file.path, (err) => {
    if (err) {
      console.log("Error:", err);
      res.status(500).json({error: err});
    } else {
      res
        .status(201)
        .json({
          status: "success",
          filename: `http://localhost:${port}/files/${req.file.filename}`
        });
    }
  })
});

app.get("/files/:filename", (req: any, res: any) => {
  const filePath = path.join(__dirname + "/../uploads", req.params.filename);
  console.log("file", filePath);
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, {"Content-Type": "text"});
      res.write("File not found");
      res.end();
    } else {
      res.writeHead(200, {"Content-Type": "image/jpeg"});
      res.write(content);
      res.end();
    }
  })
  
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
})