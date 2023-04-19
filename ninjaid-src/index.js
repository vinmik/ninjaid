const express = require('express');

const app = express();

// app.get("/api",function(req,res){
//     console.log("Working");
//     res.send({Name: "Hatake Kakashi"});
//     res.end();
// });

app.use("/api",require("./routes/api"));

app.listen(process.env.port||5050,function(){
    console.log("Listening");
});