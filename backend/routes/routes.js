const express = require("express");
const { isValidObjectId } = require("mongoose");
const Employee = require("../model/employee");
const router = express.Router();


// Get , Post , Put , Delete
// Base Path http://localhost:3000/employees 

//GET API
router.get('/' , (req, res) =>{
    Employee.find(() =>{}).then((doc)=>{
        res.send(doc)
    }).catch((err)=>{
        console.log('get API FAILD' + err)
    })
});

//post API
router.post('/' , (req, res) =>{
    let emp =  new Employee({
        name:req.body.name,
        position:req.body.position,
        dept:req.body.dept
    });
    emp.save().then((doc)=>{
      res.send(doc);
    }).catch((err)=>{
        console.log("error in Post" + err);
    });
});
//update API
router.put("/:id", (req, res) => {
    if(isValidObjectId(req.params.id)){
        let emp = ({
            name:req.body.name,
            position:req.body.position,
            dept:req.body.dept
        });
        Employee.findByIdAndUpdate(req.params.id , {$set:emp},{new:true}).then(result => {
          console.log(result);
          res.status(200).json({ message: "Post updated!" });
        });
    }

  });

// delete API
router.delete("/:id", (req, res) => {
    Employee.findByIdAndDelete(req.params.id).then(result => {
      console.log(result);
      res.status(200).json({ message: "Post deleted!" });
    });
  });
module.exports = router ;


