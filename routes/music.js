const express = require('express');
const mongo = require('mongodb');
const {
  errorMessage, successMessage, status,
} = require('../helpers/status');

const router = express.Router();

router.get("/", async (req, res) => {
    res.json({test: 'musicapi'});
});

module.exports = router