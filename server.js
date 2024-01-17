const express = require("express");
const path = require("path");
const sass = require("node-sass-middleware")

const port = 3000;

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(
    sass({
        src: __dirname,
        dest: path.join(__dirname, "public"),
        // debug: true,
        indentedSyntax: true,
        outputStyle: "expanded"
    })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index");
})

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
})