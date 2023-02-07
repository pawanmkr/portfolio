import express from "express";
import path from "path";

const dirname = decodeURI(new URL('.', import.meta.url).pathname);

const app = express();

app.set("views", path.join(dirname, "/views"));
app.set("view engine", "pug");

app.use(express.static(path.join(dirname, "/public")));

app.get("/", (req, res) => {
    res.render("index")
});

app.get("/projects", (req, res) => {
    res.render("projects")
});

app.get("/contact", (req, res) => {
    res.render("contact")
});

export default app;