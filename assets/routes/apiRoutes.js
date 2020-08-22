const noteDB = require("../db/db");

module.exports = funtion(app){
    app.get("/api/notes", function(req, res){
        res.json(noteDB);
    });
};