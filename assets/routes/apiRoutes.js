const path = require("path");
const noteDB = require("../db/db.json");
const fs = require("fs");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(noteDB);
    });

    app.post("/api/notes", function(req, res){
        fs.readFile("../db/db.json",(err,data)=>{
            if(err) throw err;
            let notes =JSON.parse(data);

            notes.push(req.body);
            const jsonString = JSON.stringify(notes);
            fs.writeFile("../db/db.json", jsonString, (err)=> {
                if (err){
                    console.log("Write File ERROR", err);
                }else{
                    console.log("Write File SUCCESS");
                }
            });
        });
    });
};