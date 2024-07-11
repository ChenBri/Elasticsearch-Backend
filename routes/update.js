var express = require('express');
var router = express.Router();

require('dotenv').config();

const { Client } = require('@elastic/elasticsearch')
const client = new Client({
  cloud: {
    id: process.env.CLOUD_ID
  },
  auth: {
    username: process.env.AUTH_USERNAME,
    password: process.env.AUTH_PASSWORD
  }
})


router.post('/', async function (req, res) {
  const { query } = req.body;
    console.log(query);c
    console.log("----------------------------------------------------");
  if (!query) {
    return res.status(400).json({ 'error': "No query was selected." });
  }
  console.log(query);
  const data = await client.updateByQuery(query);

  return res.json({ status: "success", data });
});

module.exports = router;
