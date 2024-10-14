const router = require("express").Router();
let Information = require("../models/test.js");
let Review = require("../models/review.js");



router.route("/add").post((req,res)=>{

    const oname = req.body.oname;
    const cname = req.body.cname;
    const age = req.body.age; 
    const file = req.body.file;
  

    const newInformation = new Information({
        oname,
        cname,
        age,
        file
    })

    newInformation.save().then(()=>{
        res.json("Information Added")
    }).catch((err)=>{
        console.log(err);
    })  
})
router.route("/adds").post((req,res)=>{

    
    const d1 = req.body.d1;
    const d2 = req.body.d2;
    const d3 = req.body.d3;
    const d4 = req.body.d4;
    const d5 = req.body.d5;
    const d6 = req.body.d6;
    const d7 = req.body.d7;
    const d8 = req.body.d8;

    const newReview = new Review({
     
        d1,
        d2,
        d3,
        d4,
        d5,
        d6,
        d7,
        d8
    })

    newReview.save().then(()=>{
        res.json("Review Added")
    }).catch((err)=>{
        console.log(err);
    })  
})

router.route("/").get((req,res)=>{

    Information.find().then((information)=>{
        res.json(information)
    }).catch((err)=>{
        console.log(err)
    })
})
router.route("/all").get((req,res)=>{

    Review.find().then((review)=>{
        res.json(review)
    }).catch((err)=>{
        console.log(err)
    })
})
;

module.exports = router;
