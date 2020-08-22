const path = require("path");

module.exports = function(app){
    // here: creates routes
    app.get("/notes", function(req, res){
        res.sendFile(path.join(__dirname, "../html/notes"));
    });
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../html/index"));
    });
};