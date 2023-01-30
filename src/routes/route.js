import express from "express";
import home from "../controller/home.js";

const router = express.Router();

router.get("/", (req, res) => {
    home(req, res);
});

export default router;