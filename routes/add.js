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
    const information = req.body;

    if (!information) {
        return res.status(400).json({ 'error': "No query was selected." });
    }
    console.log(information);
    let countSearch = await client.search({
        "index": "sample",
        "body": {
            "query": {
                "match_all": {}
            }
        }
    });
    let count = countSearch.hits.total.value;

    const data = await client.index({
        index: 'sample',
        document: { ...information, id: ++count },
    })
    /* console.log({ ...information, id: ++count }); */
    return res.json({ status: "success", data });
});

module.exports = router;
