const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const routesIndex = require("./routes/index");
const routesData = require("./routes/data");
const routesName = require("./routes/name");

const app = express();

app.use(express.static("public"));

app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(routesIndex);
app.use("/data", routesData);
app.use("/", routesName);

app.listen(3000);
