const express = require("express");

const router = express.Router();

router.get("/ninjas",function(req,res) {
    res.send({Name: "Kakashi Hatake",Type: "GET"});
});

router.post("/ninjas",function(req,res) {
    res.send({Name: "Kakashi Hatake",Type: "GET"});
});

router.put("/ninja/:id",function(req,res) {
    res.send({Name: "Kakashi Hatake",Type: "GET"});
});

router.delete("/ninja/:id",function(req,res) {
    res.send({Name: "Kakashi Hatake",Type: "GET"});
});

module.exports = router;