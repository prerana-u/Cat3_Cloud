const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const app = express();
const bodyParser = require('body-parser');
const oneDay = 1000 * 60 * 60 * 24;



app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
    })
   );

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
  });


const db = mysql.createConnection({
    user: "admin",
    host: "cat3-db.cyemrepqmjpi.us-east-1.rds.amazonaws.com",
    password: "12345678",
    database: "cat3data",
    
 });

 

  app.get('/getdets', (req, res)=> {
    const regno = req.query.regno;
    
    db.execute(
      "select * from student order by name",
    
      (err, result)=> {
   //  console.log(err);
      console.log(result);
      res.send(result);
      }
    );
  });

  app.post('/insertdets', (req, res)=> {
    const name = req.body.Student_Name;
    const dob = req.body.Date_of_Birth;
    const course=req.body.Course;
    const gender=req.body.Gender;
    const nationality = req.body.Nationality;
    
    console.log("ho");
    db.execute(
      "INSERT INTO student (name, course, gender, nationality, dob) VALUES (?,?,?,?,?)",
      [name,course,gender,nationality,dob],
      (err, result)=> {
      console.log(err);
      console.log(result);
      res.send(result);
      }
    );
 });



app.listen(3001, () => {
   console.log("running server");
});