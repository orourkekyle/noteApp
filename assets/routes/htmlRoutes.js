const path = require("path");

module.exports = function(app){
    // here: creates routes
    app.get("/reservations", function(req, res){
        res.sendFile(path.join(__dirname, "#"));
    });
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "#"));
    });
};