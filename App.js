const express = require('express');
const mongoose = require('mongoose');
const StudentModule = require('./modules/student.module');
const app = express();
app.use(express.json());

const mongooseLink = "mongodb+srv://moamin:karnfaktry88@cluster0.pzkpehq.mongodb.net/"
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => { console.log("mongo connected") });


app.get("/app", (req, res) => {
    res.status(200).json({
        message: 'no',
        batata: '5kg',
    })
})

app.post("/creatNewStudent", (req, res) => {
    // StudentModule.create({
    //     name: req.body.name,
    //     id: req.body.id,
    // })
    
    StudentModule.create({
               name: req.body.name,
               id: req.body.id,
             }).then((response) => {
                       res.status(200).json({
                        message: "student added.",
                       });
                     }).catch(e => {
        res.status(500).json({message:'error'})
    });
});



// app.post("/creatNewStudent", (req, res) => {
//     StudentModule.create({
//       name: req.body.name,
//       id: req.body.id,
//     }).then((response) => {
//       res.status(200).json({
//         message: "student added.",
//       });
//     }).catch(e=>{
//       res.status(500).json({message:'error'})
//     });
//   });
//   

module.exports = app;