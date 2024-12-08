var express = require('express');
var router = express.Router();
var ContactSchema = require("./Model/ContactSchema");


/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    let contactlist = await ContactSchema.find();
    res.json({
      status: "success",
      contactlist
    });
  } catch (e) {
    console.log(e);
  }
});
router.post('/',async function(req, res, next) {
  try{
    console.log(req.body);
    const data= new ContactSchema(req.body);
     await data.save();
    res.status(200).json({
      status:"success"
    })
  }catch(e){
    console.log(e)
  }
  
});

module.exports = router;
