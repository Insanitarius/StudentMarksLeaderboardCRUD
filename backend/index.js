const express = require("express");
const app = express();
const mysqli = require("mysql");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

const db = mysqli.createConnection({
  user: process.env.USER,
  host: process.env.HOST,
  password: process.env.PASS,
  database: process.env.DATABASE,
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const rollNo = req.body.rollNo;
  const maths = parseInt(req.body.maths);
  const phy = parseInt(req.body.phy);
  const chem = parseInt(req.body.chem);

  const totalMarks = parseInt(maths + phy + chem);
  const percentage = parseInt(totalMarks / 3);

  db.query(
    "INSERT INTO student (rollNo,name,maths, phy, chem, totalMarks, percentage) VALUES (?,?,?,?,?,?,?)",
    [rollNo, name, maths, phy, chem, totalMarks, percentage],
    (err, result) => {
      if (err) {
        return res.status(400).json({
          error: err.sqlMessage,
        });
      } else {
        res.send("Values Inserted");
      }
    }
  );
});

app.get("/fetchStudents", (req, res) => {
  db.query("SELECT * FROM STUDENT", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(process.env.PORT, () => {
  console.log("Backend Started!");
});
