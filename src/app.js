import express from "express";
import path from "path";
import router from "./routes/route.js";

const dirname = decodeURI(new URL('.', import.meta.url).pathname);

const app = express();

app.set("views", path.join(dirname, "/views"));
app.set("view engine", "pug");

app.use(express.static(path.join(dirname, "/public")));

app.use("/", router);

export default app;