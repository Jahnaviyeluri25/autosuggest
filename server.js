const express = require("express");
const app  = express();
const port = process.eventNames.PORT || 6700; // if the port is already set then we have use that else we give 6700 

//to tell app. where static files  -html/css/js are stored
app.use(express.static("frontend"));

app.listen(port, function()
{
    console.log("App running on http://localhost:" + port);
});