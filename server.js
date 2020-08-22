const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("./assets"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require routes
require("./assets/routes/apiRoutes")(app);
require("./assets/routes/htmlRoutes")(app);

// listener
app.listen(PORT, function() {
    console.log("App listening on PORT" + PORT);
});