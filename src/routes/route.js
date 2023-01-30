import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/projects", (req, res) => {
    res.render("projects");
});

export default router;