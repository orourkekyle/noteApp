const path = require("path");
const noteDB = require("../db/db.json");
const fs = require("fs");

module.exports = function(app){
    app.get("/api/notes", function(req, res){
        res.json(noteDB);
    });

    app.post("/api/notes", function(req, res){
        fs.readFile(path.join(__dirname, "../db/db.json"),(err,data)=>{
            if(err) throw err;
            let notes =JSON.parse(data);

            notes.push(req.body);
            const jsonString = JSON.stringify(notes);
            fs.writeFile(path.join(__dirname, "../db/db.json"), jsonString, (err)=> {
                if (err){
                    console.log("Write File ERROR", err);
                }else{
                    console.log("Write File SUCCESS");
                }
            });
        });
    });

    app.delete('/api/notes:id', function (req, res) {
        const { id } = req.params;

        var dataAfterDeleting = noteDB.filter(note => note.id !== id);

        fs.writeFile(path.join(__dirname, "../db/db.json"), dataAfterDeleting, function(err){
            if (err){
                console.log("ERROR Creating new db.json");
            }else{
                console.log("SUCCESSFUL Deletion");
            }
        });
      });
};