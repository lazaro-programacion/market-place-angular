const express = require('express');
const router = express.Router();


router.get("/",
    (req, res) => res.status(200).send(db.collection())
)

module.exports = router;
