const express = require("express");
const config = require("./config.js");
const app = express();
const PORT = config.PORT;

app.use(express.static("public"));
app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
