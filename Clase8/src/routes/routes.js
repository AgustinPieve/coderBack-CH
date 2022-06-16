const express = require("express");
// OBTENGO EL ROUTER DE EXPRESS
const { Router } = express;
// EJECUTO EL ROUTER
const router = Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname + "index.html");
});

// EXPORTO EL ROUTER
module.exports = router