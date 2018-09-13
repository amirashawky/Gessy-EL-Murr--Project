const express = require('express');
const router = express.Router();
const Media = require('../Model/model');

router.get('/', (req, res) => {
    res.status(200).json({Media});
});
module.exports=router;