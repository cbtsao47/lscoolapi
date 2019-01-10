const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET /clients endpoint");
});

router.get("/:id", (req, res) => {
  res.send(`GET /clients/${req.params.id}`);
});

module.exports = router;
