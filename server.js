const express = require("express");
const app = express();

const port = 6700;

app.use(express.static("frontend"));

app.listen(port, () => {
    console.log("Running on http://localhost:" + port);
});